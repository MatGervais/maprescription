import React, {useState} from 'react';
import axios from "axios"

const Register = () => {

    
    const [register, setRegister] = useState({
        email:"",
        password:""
    })
    const [message, setMessage] =useState({
        isSubmit : false,
        error:"",
        errorPassword:"",
        registrationMessage:""
    })

    function onChange({currentTarget}){
        const {name,value} = currentTarget
        setRegister({...register, [name]:value})
        setMessage({...message, isSubmit:false, success:{result:false}, registrationMessage:""})
    }

    async function handleSubmit(e){
        e.preventDefault()
        try {await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, register).then((res)=>{
            setMessage({...message, isSubmit:true, success:{result:res.data.success}, registrationMessage:res.data.message})
        })
        } catch(err) {
            // console.log(err.response.data.message);
            setMessage({...message, isSubmit:true, success:{result:false}, registrationMessage:err.response.data.message})
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
                    {!message.isSubmit ? (

                        <input type="submit" className="w-100 btn btn-lg btn-primary" value="Se pré-inscrire" />

                        ):
                        (
                            !message.success?.result ? (
                            <>
                                <p className="w-100 btn btn-lg btn-primary disabled"><i class="fa-solid fa-xmark mx-2"></i>Se pré-inscrire</p>
                                <div className="d-flex align-items-center alert alert-danger row pb-0 mt-3">
                                    <div className="col-md-2">
                                        <i  className="fa-solid fa-triangle-exclamation display-6 pb-4"></i>
                                        </div>
                                        <div className="col-md-10">
                                        <p>{message.registrationMessage}</p>
                                    </div>
                                </div>
                            </>
                            ) :
                            (
                                <>
                                    <p className="w-100 btn btn-lg btn-success"><i className={`fa fa-check mx-2`}></i>{message.registrationMessage}</p>
                                </>

                            )
                    )}
                    <p className='text-center mt-3'><small><i class="fa-solid fa-triangle-exclamation mx-2"></i>Nombre de pré-inscription limité</small></p>
                    <p className='text-center mt-3'><small><i className={`fa fa-lock mx-2`}></i>Aucune de vos informations ne seront partagées</small></p>
                    </form>
                </div>
                </div>
            </div>
    );
}

export default Register;
