import React, {useState} from 'react';
import axios from "axios"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import jwtDecode from 'jwt-decode';
import moment from 'moment';

const FormAddItem = ({method,name,stock,renewed,prescPerDay,setMedication,medication,id,toggleHide,setEdit}) => {

    const token = window.localStorage.getItem("YPToken")
    const user =  jwtDecode(token)

    const [form,setForm] = useState({
        name:name||"",
        stock:stock||0,
        renewed: renewed || new Date(),
        dosage :prescPerDay||0,
        userId:user.id
    })


    const [formError,setFormError] = useState({
        name:"",
        stock:"",
        renewed: "",
        dosage :"",
        postMsg:""
    })

    function onChange({currentTarget}) {
        const {name,value} = currentTarget
        setForm({...form, [name]:value})
    }
    
    async function submitForm(event){
        event.preventDefault();
        form.renewed = moment(form.renewed).format("YYYY-MM-DD")
        if(form.name.length<1){
            setFormError({...formError, name:"Veuillez renseigner un nom de médicament"})
        }
        else {
            setFormError({...formError, name:""})
        }
        if(method==="put"){
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            await axios.put(`${process.env.REACT_APP_API_URL}/api/medication/${id}`, form)
            .then(res=>{
                const newState = medication.map(obj => {
                    if (obj.id === id) {
                      return res.data.modifyMed;
                    }
                    return obj;
                  });

                  setMedication(newState)
                })
                await toggleHide()
        }
        if(method==="post"){
            console.log(form);
            try{
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            await axios.post(`${process.env.REACT_APP_API_URL}/api/medication`, form)
            .then(res=>{
                setMedication([...medication,res.data.newMedication])
            })
        } catch(err){
            console.log(err);
        }
        }
        setEdit("plus")
    }

    function changeDate(date){
        setForm({...form,renewed:date})
    }

    return (
                    <form onSubmit={submitForm}>

                    <h4 className="card-title">{method==="post"?"Ajout d'un médicament":"Modification du médicament"}</h4>
                    <input className='form-control mt-3' onChange={onChange} type="text" value={form.name} name="name" id="name" placeholder='Nom du médicament' />
                    {formError.name !== "" ? <div className="text-danger">{formError.name}</div>:""}
                
                    <h6 className={`card-subtitle my-2 text-muted`}>RESTANTS :</h6>
                    <input className='form-control' onChange={onChange} type="number" value={form.stock} name="stock" id="stock" placeholder='Votre stock' />

                    <p className="card-text  mt-2">Posologie (par jour) :
                    <input className='form-control' onChange={onChange} type="number" value={form.dosage} name="dosage" id="dosage" placeholder='Votre posologie' /></p>

                    <p className="card-text">Inventaire fait le : </p>
                    <DatePicker className='form-control' showTimeSelect={false} onChange={changeDate} name="renewed" id="renewed" selected={renewed ? new Date(form.renewed) : new Date(form.renewed)} />
                    {/* <input className='form-control' onChange={onChange} value={renewed} type="datetime" name="renewed" id="renewed" /> */}
                    

                    <div className='row mt-4'>
                        <button className='btn btn-danger col-md-5 col-6 mx-auto' onClick={toggleHide}>Annuler</button>
                        <button className="btn btn-success col-md-5 col-6 mx-auto" type="submit">Enregistrer</button>
                    </div>
                    </form>
    );
}

export default FormAddItem;
