import './App.css';
import { useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/vitrine/About';
import Login from './pages/Login';
import Navbar from './components/nav/Navbar';
import Prescription from './pages/Prescription';
import AuthContext from './contexts/authContext';
import Profile from './pages/user/Profile';
import Supervisor from './pages/Supervisor';
import QrCode from './pages/QrCode';


function App() {


  const [authenticated, setAuth] = useState(false)
  const authContext = {
    authenticated,
    updateAuth: setAuth
  }

  return (
    <AuthContext.Provider value={authContext}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mon-stock" element={<Prescription />} />
          {/* <Route path="/qr" element={<QrCode />}/> */}
          {/* <Route path="/superviseur" element={<Supervisor />} /> */}
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;