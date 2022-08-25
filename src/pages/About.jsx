import React, { useState, useEffect } from 'react';
import Navbar from '../components/nav/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import WOW from 'wowjs';
import 'animate.css';

const About = () => {

    useEffect(() => {
        new WOW.WOW({
          live: true,
          offset:       100,

        }).init();
      }, [])

    const [view,setView] = useState("card")
    const [register, setRegister] = useState({
        email:"",
        password:""
    })
    const [message, setMessage] =useState({
        isSubmit : false,
        errorPassword:"",
        registrationSuccess:""
    })

    function toggleView(){
        if(view==="card"){
            setView("array")
        }
        else {
            setView("card")
        }
    }

    function onChange({currentTarget}){
        const {name,value} = currentTarget
        setRegister({...register, [name]:value})
    }

    async function handleSubmit(e){
        e.preventDefault()
        // await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, register).then((res)=>{
        //     // console.log(res.data.message);
        //     setMessage({...message, registrationSuccess:res.data.message})
        // })
        setMessage({...message, isSubmit:true, registrationSuccess:"Pré-inscription validée"})
    }
    return (
        <>
{/* <h1 class="animate__animated animate__bounce">An animated element</h1> */}
            <div className="px-4 pt-5 text-center">
                <div className="container px-5">
                    <img src={"images/author.png"} alt="" />
                </div>
                <h1 className="display-4 fw-bold">Ya prescription, c'est quoi ?</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4"><strong>YaPrescription</strong> est une application web vous permettant de gérer vos ordonnances et vos stocks de médicaments. Elle est avant tout pensée, pour être utilisée par des personnes qui ont de nombreuses ordonnances ou alors un nombre conséquent de médicaments à gérer de leur quotidien.</p>
                    <h2 className="display-5">Comment ça fonctionne ?</h2>
                    <div className="row my-5">
                        <div className="col-md-6">
                            <p className="lead mb-4">Je renseigne le nom de mon médicament : </p>
                        </div>
                        <div className="col-md-6">
                            <div class="form-group">
                                <fieldset>
                                    <input class="form-control" id="readOnlyInput" type="text" placeholder="Exemple : Délursan" readonly="" data-dashlane-rid="1314ca2ac5442dde" data-form-type="" />
                                </fieldset>
                            </div>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-md-6">
                            <p className="lead mb-4">Je renseigne le stock qui me reste pour ce médicament : </p>
                        </div>
                        <div className="col-md-6">
                            <div class="form-group">
                                <fieldset>
                                    <input class="form-control" id="readOnlyInput" type="number" placeholder="Exemple : 18" readonly="" data-dashlane-rid="1314ca2ac5442dde" data-form-type="" />
                                </fieldset>
                            </div>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-md-6">
                            <p className="lead mb-4">Je renseigne la posologie par jour de ce médicament : </p>
                        </div>
                        <div className="col-md-6">
                            <div class="form-group">
                                <fieldset>
                                    <input class="form-control" id="readOnlyInput" type="number" placeholder="Exemple : 3" readonly="" data-dashlane-rid="1314ca2ac5442dde" data-form-type="" />
                                </fieldset>
                            </div>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-md-6">
                            <p className="lead mb-4">Je renseigne la date à laquelle j'ai fait l'inventaire : </p>
                        </div>
                        <div className="col-md-6">
                            <div class="form-group">
                                <fieldset>
                                    <input class="form-control" id="readOnlyInput" type="text" placeholder="exemple : 01.01.2022" readonly="" data-dashlane-rid="1314ca2ac5442dde" data-form-type="" />
                                </fieldset>
                            </div>
                        </div>
                    </div>
                    <h2 className="display-5">Résultat : </h2>
                    <p className='lead my-4'>Après avoir validé les informations précédentes, vous obtenez <strong>la date de rupture de stock</strong> sous la forme d'une <button className='btn btn-outline-dark' onClick={toggleView}>carte</button> ou alors une nouvelle ligne s'ajoute au <button className="btn btn-outline-dark" onClick={toggleView}>tableau</button></p>
                    {view === "array" ? (
                        <table className='table mb-5'>
                            <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Inventaire fait le</th>
                                <th>À renouveler dans</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Délursan</th>
                                    <td>01/09/2022</td>
                                    <td>6 jours</td>
                                </tr>
                            </tbody>
                        </table>
                    ):(
                    <div className="row d-flex flex-wrap-reverse justify-content-center mx-2">
                        <div className={`card col-md-4 mb-4`}>
                            <div className= {`card-body`} >
                                <h4 className="card-title">Délursan</h4>
                                <h6 className={`card-subtitle mb-2 text-muted`}>RESTANTS : 18</h6>
                                <p className="card-text">Posologie (par jour) : <strong>3</strong></p>
                                <p className="card-text">Inventaire fait le : <strong>01/09/2022</strong></p>
                                <p className={`card-text`}><strong>Rupture de stock le : 07/09/2022 <span className={`text-muted`}>(dans 6 jours) </span></strong></p>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>

            <div className='divider wow animate__animated animate__fadeInUp'></div>

            <div className="container wow animate__animated animate__fadeInUp col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row align-items-center g-5 py-5">
                <div className="wow animate__animated animate__fadeInLeft col-10 col-sm-8 col-lg-6">
                    <img src={"images/mat.png"} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                </div>
                <div className="wow animate__animated animate__fadeInRight col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Développé par qui ?</h1>
                    <h2 className="h2">Mathieu <strong>Gervais</strong></h2>
                    <p className="lead">Jeune développeur web atteint de la mucoviscidose.</p>
                    <q className="lead">J'ai pensé à faire un système d'inventaire un jour en faisant mon pilulier. Je me suis dit que j'aimerais bien avoir un outil qui me permettrait, en renseignant le stock de chacun de mes médicaments, de me dire quand est-ce que je serai en rupture de tel ou tel médicament. C'est à ce moment là que je me suis décidé à développer cette plateforme afin de me tester et en même temps pour une question pratique.</q>
                </div>
                </div>
            </div>

            <div className="divider wow animate__animated animate__fadeInUp"></div>


            <div className="container wow animate__animated animate__fadeInUp col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-7 text-center text-lg-start">
                    <h1 className="display-4 fw-bold lh-1 mb-3">Se pré-inscrire</h1>
                    <p className="col-lg-10 lead">Vous êtes peut-être intéressé·e·s par le projet en tant que patient·e ou alors professionnel·le, alors si vous souhaitez être informé·e·s lors des prochaines mises à jour, vous pouvez toujours vous pré-inscrire en remplissant le petit formulaire à droite.</p>
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
                    <form onSubmit={handleSubmit} className="p-4 p-md-5 border rounded-3 bg-light">
                    <div className="form-floating mb-3">
                        <input type="email" value={register.email} onChange={onChange} className="form-control" id="floatingInput" name="email" placeholder="name@example.com" />
                        <label for="floatingInput">Adresse mail</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" value={register.password} onChange={onChange} className="form-control" id="floatingPassword" name="password" placeholder="Mot de passe" />
                        <label for="floatingPassword">Mot de passe</label>
                    </div>
                    {!message.isSubmit ? (
                        <input type="submit" className="w-100 btn btn-lg btn-primary" value="Se pré-inscrire" />
                        ):
                        (
                        <>
                            <p className="w-100 btn btn-lg btn-success"><i className={`fa fa-check mx-2`}></i>{message.registrationSuccess}</p>
                        </>
                    )}
                    <p className='text-center'><small><i className={`fa fa-lock mx-2`}></i>Aucune de vos informations ne seront partagées</small></p>
                    </form>
                </div>
                </div>
            </div>

            <div className="divider wow animate__animated animate__fadeInUp"></div>

            <div className="wow animate__animated animate__fadeInUp bg-dark text-secondary px-4 py-5 text-center">
                <div className="py-5">
                <h1 className="display-5 fw-bold text-white">Avant de partir...</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="fs-5 mb-4">Si vous souhaitez soutenir ce projet, n'hésitez pas à partager cette page sur les réseaux et autour de vous.</p>
                    <ul className="list">
                        <li className="list-group-item">Vous cherchez à me contacter : </li>
                        <li className="list-group-item"><i className={`fa fa-envelope mx-2`}></i>matgervais96@gmail.com</li>
                        <li className="list-group-item"><i className="fa-brands fa-linkedin"></i> Mathieu Gervais </li>
                    </ul>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <p><small>© 2022 yaprescription.com. All rights reserved</small></p>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default About;
