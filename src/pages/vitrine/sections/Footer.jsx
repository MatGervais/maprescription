import React from 'react';

const Footer = () => {
    return (
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
    );
}

export default Footer;
