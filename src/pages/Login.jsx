import { useState, useEffect, useContext } from "react";
import ConnectionButton from "../components/ConnectionButton";
import {useNavigate} from "react-router-dom"
import axios from 'axios';
import authContext from "../contexts/authContext";

const Login = () => {
  const [login, setLogin] = useState({
    email:"",
    password:""
  })

  const authentication = useContext(authContext)

  const [form, setForm] =useState({
    isSubmit : false,
    error:"",
    errorPassword:"",
    message:"",
    token:""
  })

  function onChange({currentTarget}){
    const {name,value} = currentTarget
    setLogin({...login, [name]:value})
    setForm({...form, isSubmit:false, success:{result:false}, registrationMessage:""})
  }

  const [authenticated, setauthenticated] = useState(localStorage.getItem("YPToken") || "" );

  let navigate = useNavigate()
  useEffect(() => {
    if(authentication.authenticed){
      navigate('/')
    }
  }, [authenticated]);

  
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, login).then((res) => {
        setForm({ ...form, isSubmit: true, success: { result: res.data.success }, message: res.data.message, token: res.data.accessToken })
        authentication.updateAuth(true)
        window.localStorage.setItem("YPToken", res.data.accessToken);
      })
    } catch (err) {
      setForm({ ...form, isSubmit: true, success: { result: err.response.data.success }, message: err.response.data.message })
    }
    navigate('/')
  };

  return (
    <main className="mt-5 bg-light d-flex align-content-center flex-wrap rounded justify-content-center container form-signin w-100 m-auto">
  <form onSubmit={handleSubmit} className="text-center col-md-4 ">
    <img className="mb-4" src={"images/logos/dark_logo_transparent_background.png"} alt="" width="340" height="154" />
    <h1 className="h3 mb-3 fw-normal">Connexion</h1>

    <div className="form-floating mt-4">
      <input type="email" onChange={onChange} className="form-control" id="floatingInput" name="email" placeholder="nom@example.com" />
      <label htmlFor="floatingInput">Adresse mail</label>
    </div>
    <div className="form-floating mt-4">
      <input type="password" onChange={onChange} className="form-control" id="floatingPassword" name="password" placeholder="Mot de passe" />
      <label htmlFor="floatingPassword">Mot de passe</label>
    </div>

    <ConnectionButton label="Se connecter" form={form} />
  </form>
</main>
  )
};

export default Login;