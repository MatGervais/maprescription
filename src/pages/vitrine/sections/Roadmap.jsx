import React from 'react';

const Roadmap = () => {
    return (
        <div className="px-4 pt-5 text-center">
        <div className="container px-5">
            <img className="mb-4" src={"images/roadmap.png"} alt="" />
        </div>
        <h1 className="display-4 fw-bold">Améliorations à venir</h1>
        <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Dans les prochains mois <strong>YaPrescription</strong> va voir son fonctionnement évoluer pour toujours, vous proposer un service plus pratique.</p>
            <p className="lead mb-4">Aucune date n'est aujourd'hui possible à avancer pour les </p>
            <h2 className="display-5">Les priorités</h2>
            <p className="lead mb-4">Envoi de mails de notification lorsque votre stock arrive à épuisement.</p>
            <p className="lead mb-4">Paramétrage de graduations des notifications de stocks</p>
        </div>
    </div>
    );
}

export default Roadmap;
