import './App.css';
import { useState, useEffect} from 'react';
import axios from 'axios';
import MedicationContext from './contexts/MedicationContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/vitrine/About';
import Login from './pages/Login';
import jwtDecode from 'jwt-decode';
import Navbar from './components/nav/Navbar';
import Prescription from './pages/Prescription';
import Cookies from "universal-cookie"
import {useCookies, CookiesProvider} from 'react-cookie'


function App() {

  const [view,setView] = useState({type:"gallery", icon:"table-list", label:"Tableau"})
  const [medocs,setMedocs] =useState([])
  const [requestMsg,setRequestMsg] = useState({
    delete:"",
    modify:""
  })
  const [cookies, setCookies] = useCookies(["accessToken"])

  const contextValue = {
    medication : medocs,
    updateMedication : setMedocs
  }
  const token = localStorage.getItem("YPToken") || null
  // if(localStorage.getItem("YPToken").length != undefined){
  //   setCookies("accessToken",token)
  // }

  console.log(cookies);


  return (
    <CookiesProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mon-stock" element={<Prescription />} />
        </Routes>
      </Router>
    </CookiesProvider>
  );
}

export default App;