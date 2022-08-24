import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
        <div className="container-fluid">
            <Link className='navbar-brand' to={"/"}>YaPrescription</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                <Link className="nav-link" to={"/"}>Accueil</Link>
                </li>
                <li className="nav-item">
                <Link className='nav-link' to={"/"}>Tarifs</Link>
                </li>
            </ul>
            </div>
    </div>
    </nav>
    );
}

export default Navbar;
