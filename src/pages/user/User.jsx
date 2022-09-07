import React from 'react';
import jwtDecode from 'jwt-decode';

const User = () => {

    const token = localStorage.getItem("YPToken")
    const user = jwtDecode(token)
    
    return (
        <div className='container mt-3'>
            <h1>Mon profil</h1>

            <form>
                <div className="form-group">
                    <label htmlFor="email" className="form-label mt-4">Adresse mail</label>
                    <input type="email" className="form-control" id="email" name='email' value={user.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname" className="form-label mt-4">Nom de famille</label>
                    <input type="text" className="form-control" id="lastname" name='lastname' value={user.lastname}/>
                </div>
                <div className="form-group">
                    <label htmlFor="firstname" className="form-label mt-4">Prénom</label>
                    <input type="text" className="form-control" id="firstname" name='firstname' value={user.firstname}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label mt-4">Nom d'utilisateur</label>
                    <input type="text" className="form-control" id="username" name='username' value={user.username}/>
                </div>
            </form>
        </div>
    );
}

export default User;
