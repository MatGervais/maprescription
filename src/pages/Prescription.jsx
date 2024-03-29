import React, {useEffect, useState} from 'react';
import Item from '../components/Item';
import TableRow from '../components/TableRow';
import axios from 'axios';
import AddItem from '../components/addItem';
import { useNavigate } from "react-router-dom";
import jwtDecode from 'jwt-decode';

const Prescription = () => {

  let navigate = useNavigate()
  if(!window.localStorage.getItem("YPToken")){
    navigate('/')
  }
  const token = window.localStorage.getItem("YPToken")
  const user = jwtDecode(token)
  
  const [view,setView] = useState({type:"gallery", icon:"table-list", label:"Tableau"})
  const [medocs,setMedocs] =useState([])
  const [requestMsg,setRequestMsg] = useState({
    delete:"",
    modify:""
  })
  
  useEffect(() => {

        async function getMeds() {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          const datas = await axios.get(`${process.env.REACT_APP_API_URL}/api/medication/user/${user?.id}`)
          setMedocs(datas.data.medications)
        }
        getMeds()
      }, [token]);

  function changeView(){
    if(view.type === "gallery"){
      setView({type:"table", icon:"grip", label:"Galerie"})
    }
    else setView({type:"gallery", icon:"table-list", label:"Tableau"})
  }


  async function removeItem(event) {
    const deleteMedication = medocs.filter(x => x.id != event.target.id);
    try {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/medication/${event.target.id}`)
        .then((res)=>{
          console.log(res);
          setMedocs(deleteMedication)
        })
    } catch (error) {
        console.log(error);
    }
    
  }

        return (
        <div className="container text-center mt-3">
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
                    <th>En rupture dans</th>
                    <th>Unités restantes</th>
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


export default Prescription;
