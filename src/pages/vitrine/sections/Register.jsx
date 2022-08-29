import React, {useState} from 'react';
import axios from "axios"
import ConnectionButton from '../../../components/ConnectionButton';

const Register = () => {

    
    const [register, setRegister] = useState({
        email:"",
        password:""
    })
    const [form, setForm] =useState({
        isSubmit : false,
        error:"",
        errorPassword:"",
        message:""
    })

    function onChange({currentTarget}){
        const {name,value} = currentTarget
        setRegister({...register, [name]:value})
        setForm({...form, isSubmit:false, success:{result:false}, registrationMessage:""})
    }

    async function handleSubmit(e){
        e.preventDefault()
        try {await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, register).then((res)=>{
            setForm({...form, isSubmit:true, success:{result:res.data.success}, message:res.data.message})
        })
        } catch(err) {
            console.log(err);
            setForm({...form, isSubmit:true, success:{result:err.response.data.success}, message:err.response.data.message})
        }
    }

    return (
        <div className="container wow animate__animated animate__fadeInUp col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-7 text-center text-lg-start">
                    <h1 className="display-4 fw-bold lh-1 mb-3">Se pré-inscrire</h1>
                    <p className="col-lg-10 lead">Vous êtes peut-être intéressé·e·s par le projet en tant que patient·e ou alors professionnel·le, alors si vous souhaitez être informé·e·s lors des prochaines mises à jour, vous pouvez toujours vous pré-inscrire en remplissant le petit formulaire à droite.</p>
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
                    <form onSubmit={handleSubmit} className="p-4 p-md-5 border rounded-3 bg-light">
                        <h2 className='h2 text-center mb-4'><strong>Pré-inscription</strong></h2>
                    <div className="form-floating mb-3">
                        <input type="text" value={register.firstname} onChange={onChange} className="form-control" id="floatingInput" name="firstname" placeholder="Prénom" />
                        <label for="floatingInput">Prénom *</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" value={register.lastname} onChange={onChange} className="form-control" id="floatingPassword" name="lastname" placeholder="Nom" />
                        <label for="floatingPassword">Nom *</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" value={register.email} onChange={onChange} className="form-control" id="floatingInput" name="email" placeholder="name@example.com" />
                        <label for="floatingInput">Adresse mail *</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" value={register.password} onChange={onChange} className="form-control" id="floatingPassword" name="password" placeholder="Mot de passe" />
                        <label for="floatingPassword">Mot de passe *</label>
                    </div>
                    
                    <ConnectionButton label="Se pré-inscire" form={form}/>

                    <p className='text-center mt-3'><small><i class="fa-solid fa-triangle-exclamation mx-2"></i>Nombre de pré-inscription limité</small></p>
                    <p className='text-center mt-3'><small><i className={`fa fa-lock mx-2`}></i>Aucune de vos informations ne seront partagées</small></p>
                    </form>
                </div>
                </div>
            </div>
    );
}

export default Register;
