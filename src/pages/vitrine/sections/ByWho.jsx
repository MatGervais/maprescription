import React from 'react';

const ByWho = () => {
    return (
            <div className="container wow animate__animated animate__fadeInUp col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row d-flex align-items-center justify-content-center g-5 py-5">
                <div className="wow animate__animated animate__fadeInLeft col-10 col-sm-8 col-lg-6">
                    <img src={"images/mat.png"} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                </div>
                <div className="wow animate__animated animate__fadeInRight col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3 text-center">Développé par qui ?</h1>
                    <h2 className="h2 text-center">Mathieu <strong>Gervais</strong></h2>
                    <p className="lead text-center">Jeune développeur web atteint de la mucoviscidose.</p>
                    <p className="lead text-center">J'ai pensé à faire un système d'inventaire un jour en faisant mon pilulier. Je me suis dit que j'aimerais bien avoir un outil qui me permettrait, en renseignant le stock de chacun de mes médicaments, de me dire quand est-ce que je serai en rupture de tel ou tel médicament. C'est à ce moment là que je me suis décidé à développer cette plateforme afin de me tester et en même temps pour une question pratique.</p>
                </div>
                </div>
            </div>
    );
}

export default ByWho;
