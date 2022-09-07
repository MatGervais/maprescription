import React, {useState} from 'react';

const Intro = () => {
    const [view,setView] = useState("card")

    function toggleView(){
        if(view==="card"){
            setView("array")
        }
        else {
            setView("card")
        }
    }
    return (
        <div className="px-4 pt-5 text-center">
                <div className="container px-5">
                    <img className="mb-4" src={"images/logos/dark_logo_transparent_background.png"} alt="" width="340" height="154" />
                </div>
                <h1 className="display-4 fw-bold">YaPrescription, c'est quoi ?</h1>
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
    );
}

export default Intro;
