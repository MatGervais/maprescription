import './App.css';
import { useState } from 'react';
import medocs from "./data/medocs.json"
import Item from './components/Item';
import TableRow from './components/TableRow';

function App() {

  const [view,setView] = useState("gallery")

  function changeView(){
    if(view === "gallery"){
      setView("table")
    }
    else setView('gallery')
  }
  return (
    <div className="App">
      <button onClick={changeView} className='btn btn-primary'>{view === "gallery" ? "Tableau":"Galerie"}</button>
      {/* {new Date().toLocaleDateString()} */}
        {view==="gallery" ? (
          medocs.map((medoc,idx)=>(
            <Item key={idx} name={medoc.name} prescPerDay={medoc.prescription_per_day} renewed={medoc.renewed} stock={medoc.stock} />
          ))
        )
        :(
          <table className='table'>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Inventaire fait le</th>
                <th>À renouveler dans</th>
              </tr>
            </thead>
            <tbody>
             {medocs.map((medoc,key)=>
              <TableRow key={key} item={medoc}/>
            )}

            </tbody>
          </table>
        )
        }  
    </div>
  );
}

export default App;