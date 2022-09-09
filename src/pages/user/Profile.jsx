import React, {useState, useEffect} from 'react';
import jwtDecode from 'jwt-decode';
import Loader from '../../components/forms/Loader';
import axios from 'axios';
import ConnectionButton from '../../components/ConnectionButton';

const Profile = () => {

    const token = localStorage.getItem("YPToken")
    const userToken = jwtDecode(token)
    console.log(userToken);

    const [user,setUser] = useState({
        id:userToken.id,
        email:"",
        firstname:"",
        lastname:"",
        username:""
    })

    useEffect(() => {
        async function fetchUserDatas() {
          try {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            await axios
              .get(`${process.env.REACT_APP_API_URL}/api/user/${userToken.id}`)
              .then((res) => {
                console.log(res.data.user);
                setUser({
                  id:userToken.id,
                  email: res.data.user.email,
                  firstname: res.data.user.firstname,
                  lastname: res.data.user.lastname,
                  username: res.data.user.username,
                });
              });
          } catch (err) {
            console.log(err);
          }
        }

        fetchUserDatas();
    }, []);

    const [form, setForm] = useState({
        isSubmit : false,
        success:true||false,
        message:"",
    })

    const [newUser, setNewUser] = useState({
        email:user.email,
        lastname:user.lastname,
        firstname:user.firstname,
        username:user.username
    })

    function onChange(e){
        setUser({...user, [e.target.name]:e.target.value})
    }

    async function submitForm(e){
        e.preventDefault()

        try {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            await axios.put(`${process.env.REACT_APP_API_URL}/api/user/${user.id}`, user)
            .then((res)=>{
                console.log(res);
                setForm({...form, isSubmit:true, success:{result:res.data.success}, message:res.data.message})
              })
            
        } catch (error) {
            setForm({...form, isSubmit:true, success:{result:error.response.data.success}, message:error.response.data.message})
        }
    }
    
    return (
        <div className='container mt-4'>
            <h1>Mon profil</h1>

            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label htmlFor="email" className="form-label mt-4">Adresse mail</label>
                    <input type="email" onChange={onChange} className="form-control" id="email" name='email' value={user.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname" className="form-label mt-4">Nom de famille</label>
                    <input type="text" onChange={onChange} className="form-control" id="lastname" name='lastname' value={user.lastname}/>
                </div>
                <div className="form-group">
                    <label htmlFor="firstname" className="form-label mt-4">Prénom</label>
                    <input type="text" onChange={onChange} className="form-control" id="firstname" name='firstname' value={user.firstname}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label mt-4">Nom d'utilisateur</label>
                    <input type="text" onChange={onChange} className="form-control" id="username" name='username' value={user.username}/>
                </div>
                <div className="d-flex justify-content-center">
                    <ConnectionButton label="Mettre à jour mes informations" form={form}/>
                </div>
            </form>
        </div>
    );
}

export default Profile;
