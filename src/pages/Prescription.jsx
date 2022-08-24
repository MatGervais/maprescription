import React, {useEffect, useState} from 'react';
import Item from '../components/Item';
import TableRow from '../components/TableRow';
import axios from 'axios';
import AddItem from '../components/addItem';
import { Navigate } from "react-router-dom";

const Prescription = () => {

    const [authenticated, setauthenticated] = useState(null);
    useEffect(() => {
      const loggedInUser = localStorage.getItem("accessToken");
      if (loggedInUser) {
        setauthenticated(loggedInUser);
        console.log(authenticated);
      }
    }, []);

    
  const [view,setView] = useState({type:"gallery", icon:"table-list", label:"Tableau"})
  const [medocs,setMedocs] =useState([])
  const [requestMsg,setRequestMsg] = useState({
    delete:"",
    modify:""
  })

  function changeView(){
    if(view.type === "gallery"){
      setView({type:"table", icon:"grip", label:"Galerie"})
    }
    else setView({type:"gallery", icon:"table-list", label:"Tableau"})
  }


  async function removeItem(event) {
    const deleteMedication = medocs.filter(x => x.id != event.target.id);
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/medication/${event.target.id}`)
        .then((res)=>{
          setMedocs(deleteMedication)
          // setRequestMsg({...requestMsg, delete:res.data.msg})
        })
    } catch (error) {
        console.log(error);
    }
    
}
    if (!authenticated) {
        return <Navigate to="/login" />;
    }
    else {
        return (
        <div>
            <button onClick={changeView} className="btn btn-primary">
            <i className={`fa fa-${view?.icon} mx-1`}></i> {view.label}
            </button>
            <p>{requestMsg.delete}</p>
            {view.type === "gallery" ? (
            <>
                <AddItem medication={medocs} setMedication={setMedocs} />
                <div className="row d-flex flex-wrap-reverse justify-content-center mx-2">
                {medocs?.map((medoc, idx) => (
                    <Item
                    medication={medocs}
                    setMedication={setMedocs}
                    key={idx}
                    id={medoc.id}
                    removeFunction={removeItem}
                    name={medoc.name}
                    prescPerDay={medoc.dosage}
                    renewed={medoc.renewed}
                    stock={medoc.stock}
                    />
                ))}
                </div>
            </>
            ) : (
            <table className="table">
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>Inventaire fait le</th>
                    <th>À renouveler dans</th>
                </tr>
                </thead>
                <tbody>
                {medocs.map((medoc, key) => (
                    <TableRow key={key} item={medoc} />
                ))}
                </tbody>
            </table>
            )}
        </div>
        );
    }
}


export default Prescription;
