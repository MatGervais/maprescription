import React, {useEffect, useState} from 'react';
import moment from 'moment';
import FormAddItem from './formAddItem';

const Item = ({name,stock,renewed,prescPerDay,id,setMedication,medication, removeFunction}) => {

    const [toRenew, setRenew]=useState(new Date(renewed).toLocaleDateString())
    const [daysRemaining, setDaysRemaining] = useState(0)
    const [edit,setEdit] = useState(false)


    useEffect(()=>{
      function toRenewFunction(){
        var nbJourRestant = Math.trunc(stock/prescPerDay)
        setRenew(moment(moment(renewed).add(nbJourRestant, 'days').format("YYYY-MM-DDTHH:mm:ss.SSSSZ"))._i)
        console.log(new Date(renewed).getTime());
        /* ----------------------------À GARDER POUR LE BACK------------------------- */
        /*       console.log(moment(new Date(toRenew).getTime()).format("DD"));       */
        /* -------------------------------------------------------------------------- */
    }
    toRenewFunction()
        const diffTime = Math.abs(new Date(toRenew) - new Date());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        setDaysRemaining(diffDays)
    },[medication,toRenew])

    function toggleToInput(event){
      if(edit){
        setEdit(false)
      }
      else {setEdit(true)}
    }

    
    return (
      <div className={`card ${daysRemaining < 10 ? "bg-danger text-white":daysRemaining < 18 ? "border-warning" : ""} col-md-3 m-3`}>
        <div className= {`card-body`} >
          <div className="d-flex flex-row-reverse">
              <button type="button" onClick={removeFunction} className={`btn ${daysRemaining < 10 ? "btn-light text-danger":"btn-danger"}`} id={id} data-bs-dismiss="alert"><i className="fa fa-trash-can mx-1"></i></button>
              <button type="button" onClick={toggleToInput} className={`btn ${daysRemaining < 10 ? "text-info btn-light":"btn-info"} mx-2`} id={id} data-bs-dismiss="alert"><i className="fa fa-pen-clip mx-1"></i></button>
          </div>
          {!edit ? (
            <>
            <h4 className="card-title" id={`${id}-${name}`}>{name}</h4>
            <h6 className={`card-subtitle mb-2 ${daysRemaining < 10 ? "text-white":daysRemaining < 18 ? "text-warning" : "text-muted"}`} id={`${id}-${stock}`}>RESTANTS : <strong>{stock}</strong></h6>
              <p className="card-text" id={`${id}-${prescPerDay}`}>Posologie (par jour) : <strong>{prescPerDay}</strong></p>
            <p className="card-text">Inventaire fait le : <strong onClick={()=>console.log("Input")}>{new Date(renewed).toLocaleDateString()}</strong></p>
            <p className={`card-text`}><strong>Rupture de stock le : {new Date(toRenew).toLocaleDateString()} <span className={`${daysRemaining < 10 ? "text-white":daysRemaining < 18 ? "text-warning" : "text-muted"}`}>(dans {daysRemaining?daysRemaining:""} jours) </span></strong></p>
            </>
          ): 
          <FormAddItem method="put" setMedication={setMedication} medication={medication} id={id} name={name} stock={stock} renewed={renewed} prescPerDay={prescPerDay} setEdit={setEdit} toggleHide={toggleToInput}/>
          }
        </div>
      </div>
    );
}

export default Item;
