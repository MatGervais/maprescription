import React, {useState} from 'react';
import axios from 'axios';
import FormAddItem from './formAddItem';
import jwtDecode from 'jwt-decode';

const AddItem = ({medication, setMedication}) => {

    const token = localStorage.getItem("YPToken")
    const user =  jwtDecode(token)

    const [ItemToggle,setItemToggle] = useState("plus") //Affichage d'un bouton +
    // const [form,setForm] = useState({
    //     name:"",
    //     stock:0,
    //     renewed: "",
    //     dosage :0,
    //     userId:user.id
    // })

    // const [formError,setFormError] = useState({
    //     name:"",
    //     stock:"",
    //     renewed: "",
    //     dosage :"",
    //     postMsg:""
    // })
    
    function toggleAddItem(){
        if(ItemToggle === "plus"){
            setItemToggle("minus")
        }
        else {
            setItemToggle("plus")
        }
    }

    // function onChange({currentTarget}) {
    //     const {id,value} = currentTarget
    //     console.log(id,value);
    //     setForm({...form, [id]:value})
    // }
    
    // async function submitForm(event){
    //     event.preventDefault();
    //     if(form.name.length<2){
    //         console.log("erroor")
    //         setFormError({...formError, name:"Veuillez renseigner un nom de médicament"})
    //     }
    //     else {
    //         setFormError({...formError, name:""})
    //     }
    //     console.log(JSON.stringify(form))
    //     await axios.post(`${process.env.REACT_APP_API_URL}/api/medication`, form, { headers: {"Authorization" : `Bearer ${token}`} })
    //     .then(res=>{
    //         console.log(res)
    //         setMedication([...medication,res.data.newMedication])
    //     })


    // }

    return (
        <>
        {ItemToggle === "plus" ? (
            <>
            <button className='btn btn-info btn-block' onClick={toggleAddItem}>
            <i className="fa fa-plus mx-1"></i> Ajouter un médicament
            </button>
            </>
        )
        :
        <div className='row d-flex align-items-center justify-content-center'>
            <div className={`card col-md-4 mx-2`}>
                <div className= {`card-body `} >
                    <div className="d-flex flex-row-reverse">
                        <button type="button" onClick={toggleAddItem} className="btn btn-light" data-bs-dismiss="alert"><i className="fa fa-xmark mx-1"></i></button>
                    </div>

                    <FormAddItem method="post" toggleHide={toggleAddItem} setEdit={setItemToggle} setMedication={setMedication} medication={medication} />
                    {/* <form onSubmit={submitForm}>

                    <h4 className="card-title">Ajout d'un médicament</h4>
                    <input className='form-control mt-3' onChange={onChange} type="text" name="addName" id="name" placeholder='Nom du médicament' />
                    {formError.name !== "" ? <div className="text-danger">{formError.name}</div>:""}
                
                    <h6 className={`card-subtitle my-2 text-muted`}>RESTANTS :</h6>
                    <input className='form-control' onChange={onChange} type="number" name="addStock" id="stock" placeholder='Votre stock' />

                    <p className="card-text  mt-2">Posologie (par jour) :
                    <input className='form-control' onChange={onChange} type="number" name="addDosage" id="dosage" placeholder='Votre posologie' /></p>

                    <p className="card-text">Inventaire fait le :
                    <input className='form-control' onChange={onChange} type="date" name="addDate" id="renewed" />
                    </p>

                    <div className='row mt-4'>
                    <button className='btn btn-danger col-md-4 col-4 mx-auto' onClick={toggleAddItem}>Annuler</button>
                    <input className="btn btn-success col-md-4 col-4 mx-auto" type="submit" value="Enregistrer" />
                    </div>
                    </form> */}
                </div>
            </div>
        </div>
        }
      </>
    );
}

export default AddItem;
