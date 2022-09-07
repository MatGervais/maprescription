import './App.css';
import { useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import About from './pages/vitrine/About';
import Login from './pages/Login';
import Navbar from './components/nav/Navbar';
import Prescription from './pages/Prescription';
import AuthContext from './contexts/authContext';
import User from './pages/user/User';


function App() {


  const [authenticated, setAuth] = useState(false)
  const authContext = {
    authenticated,
    updateAuth: setAuth
  }

  const token = window.localStorage.getItem("YPToken") || ""

  return (
    <AuthContext.Provider value={authContext}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/profil" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mon-stock" element={<Prescription />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;