import React, {useState, useEffect} from 'react';
import moment from "moment"

const TableRow = ({item}) => {
    const [toRenew, setRenew]=useState(moment(item.renewed).format("YYYY-MM-DDTHH:mm:ss.SSSSZ"))
    const [daysRemaining, setDaysRemaining] = useState(0)

    useEffect(()=>{
        function toRenewFunction(){
            var nbJourRestant = Math.trunc(item.stock/item.prescription_per_day)
            setRenew(moment(moment(item.renewed).add(nbJourRestant, 'days').format("YYYY-MM-DDTHH:mm:ss.SSSSZ"))._i)
            // console.log(moment(moment(moment(item.renewed).add(nbJourRestant, 'days').format("YYYY-MM-DDTHH:mm:ss.SSSSZ"))._i)._i)
        }
        toRenewFunction()

        const diffTime = Math.abs(new Date(toRenew) - new Date());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        setDaysRemaining(diffDays)
    },[toRenew])

    return (
        <tr className={`${daysRemaining < 10 ? "table-danger":daysRemaining < 18 ? "table-warning" : ""}`}>
            <th scope="row">{item.name}</th>
            <td>{new Date(item.renewed).toLocaleDateString()}</td>
            <td>{daysRemaining?daysRemaining:""} jours</td>
        </tr>
    );
}

export default TableRow;
