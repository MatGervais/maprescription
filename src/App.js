import './App.css';
import { useState, useEffect} from 'react';
import axios from 'axios';
import MedicationContext from './contexts/MedicationContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/vitrine/About';
import Login from './pages/Login';

function App() {

  const [view,setView] = useState({type:"gallery", icon:"table-list", label:"Tableau"})
  const [medocs,setMedocs] =useState([])
  const [requestMsg,setRequestMsg] = useState({
    delete:"",
    modify:""
  })

  const contextValue = {
    medication : medocs,
    updateMedication : setMedocs
  }

  function changeView(){
    if(view.type === "gallery"){
      setView({type:"table", icon:"grip", label:"Galerie"})
    }
    else setView({type:"gallery", icon:"table-list", label:"Tableau"})
  }

  useEffect(() => {
    console.log("UseEffect");
    async function getMeds() {
      const datas = await axios.get(`${process.env.REACT_APP_API_URL}/medication`)
      setMedocs(datas.data)
    }
    getMeds()
  }, []);


  async function removeItem(event) {
    const deleteMedication = medocs.filter(x => x.id != event.target.id);
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/medication/${event.target.id}`)
        .then((res)=>{
          setMedocs(deleteMedication)
        })
    } catch (error) {
        console.log(error);
    }
    
}


  return (
    <MedicationContext.Provider value={contextValue}>
      <Router>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </MedicationContext.Provider>
  );
}

export default App;