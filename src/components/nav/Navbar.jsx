import axios from 'axios';
import React, { useContext, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authContext from '../../contexts/authContext';

const Navbar = () => {

  const authentication = useContext(authContext);

  useEffect(()=>{
    if(window.localStorage.getItem("YPToken")){
        authentication.updateAuth(true)
    }
  },[])

    let navigate = useNavigate()
    async function disconnect(){
        await axios.get('http://localhost:5000/auth/logout').then((res)=>{
            window.localStorage.removeItem("YPToken")
        })
        navigate("/")
    }

    return (
        <>{
            window.localStorage.getItem("YPToken") ? (

            <nav className="navbar navbar-expand navbar-dark bg-dark navbar-fixed-top">
            <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}>
                YaPrescription
            </Link>
            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <Link className="nav-link" to={"/"}>
                    Accueil
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/mon-stock"}>
                    Mes médicaments
                    </Link>
                </li>
                </ul>
                <form className="d-flex" data-dashlane-rid="5d565b6790b9a581" data-form-type="">
                    <button className="btn btn-secondary my-2 my-sm-0" onClick={disconnect}><i className="fa-solid fa-right-from-bracket"></i></button>
                </form>
            </div>
            </div>
        </nav>
            ):(<></>)
        }
      </>
    );
}

export default Navbar;
