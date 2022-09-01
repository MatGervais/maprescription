import { useState, useEffect } from "react";
import ConnectionButton from "../components/ConnectionButton";
import {useNavigate} from "react-router-dom"
import axios from 'axios';

const Login = () => {
  const [login, setLogin] = useState({
    email:"",
    password:""
  })

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
    if(authenticated.length > 1){
      navigate('/')
    }
  }, [authenticated]);

  
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, login).then((res) => {
        setForm({ ...form, isSubmit: true, success: { result: res.data.success }, message: res.data.message, token: res.data.token })
        form.token = res.data.token
        window.localStorage.setItem("YPToken", form.token);
      })
    } catch (err) {
      console.log(err);
      setForm({ ...form, isSubmit: true, success: { result: err.response.data.success }, message: err.response.data.message })
    }
    navigate('/')
  };

  return (
    <main class="mt-5 bg-light d-flex align-content-center flex-wrap rounded justify-content-center container form-signin w-100 m-auto">
  <form onSubmit={handleSubmit} className="text-center col-md-4 ">
    <img class="mb-4" src={"images/logos/dark_logo_transparent_background.png"} alt="" width="340" height="154" />
    <h1 class="h3 mb-3 fw-normal">Connexion</h1>

    <div class="form-floating mt-4">
      <input type="email" onChange={onChange} class="form-control" id="floatingInput" name="email" placeholder="nom@example.com" />
      <label for="floatingInput">Adresse mail</label>
    </div>
    <div class="form-floating mt-4">
      <input type="password" onChange={onChange} class="form-control" id="floatingPassword" name="password" placeholder="Mot de passe" />
      <label for="floatingPassword">Mot de passe</label>
    </div>

    <ConnectionButton label="Se connecter" form={form} />
  </form>
</main>
  )
};

export default Login;