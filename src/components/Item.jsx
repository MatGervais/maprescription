import React, {useEffect, useState} from 'react';
import moment from 'moment';

const Item = ({name,stock,renewed,prescPerDay}) => {

    const [toRenew, setRenew]=useState(new Date(renewed).toLocaleDateString())
    const [daysRemaining, setDaysRemaining] = useState(0)


    useEffect(()=>{
      function toRenewFunction(){
        var nbJourRestant = Math.trunc(stock/prescPerDay)
        setRenew(moment(moment(renewed).add(nbJourRestant, 'days').format("YYYY-MM-DDTHH:mm:ss.SSSSZ"))._i)
        // console.log(moment(moment(moment(item.renewed).add(nbJourRestant, 'days').format("YYYY-MM-DDTHH:mm:ss.SSSSZ"))._i))
    }
    toRenewFunction()
        const diffTime = Math.abs(new Date(toRenew) - new Date());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        setDaysRemaining(diffDays)
    },[toRenew])
    
    return (
      <div className={`card ${daysRemaining < 14 ? "border-danger" : ""} col-md-3 m-3`}>
        <div className= {`card-body`} >
          <h4 className="card-title">{name}</h4>
          <h6 className={`card-subtitle mb-2 ${daysRemaining < 14 ? "text-danger" : "text-muted"}`}>RESTANTS : {stock}</h6>
          <p className="card-text">Posologie (par jour) : {prescPerDay}</p>
          <p className="card-text">Inventaire fait le : {new Date(renewed).toLocaleDateString()}</p>
          <p className={`card-text`}>À renouveler le : {new Date(toRenew).toLocaleDateString()} <span className={`${daysRemaining < 14 ? "text-danger" : "text-muted"}`}>(dans {daysRemaining?daysRemaining:""} jours) </span></p>
        </div>
      </div>
    );
}

export default Item;
