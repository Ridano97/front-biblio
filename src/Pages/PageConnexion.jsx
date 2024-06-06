import React, { useState } from 'react'
import instance from '../API/Axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const PageConnexion = () => {
        //variable //fonction
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate(); 

    const login = () => {
        instance.post('/auth/login', {
            email: email,
            password: password
          })
          .then(function (response) {
            console.log(response.data.token);
            toast.success(response.data.message);
            localStorage.setItem("token", response.data.token);
            navigate("/");
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  return (
    <div className='d-flex justify-content-center m-5 flex-column align-items-center' >
            <h2>Connexion</h2>
            <label htmlFor="">Email</label>
            <input className='m-3' defaultValue={email} onChange={(e) => {setEmail(e.target.value)}} placeholder='example@example.com' type="email" />
            <label htmlFor="">Mot de passe </label>
            <input className='m-2' defaultValue={password} onChange={(e) => {setPassword(e.target.value)}} type="password" />
            <a href='blabla'><p>Mot de passe oublié</p></a> 
            <button className='m-3' onClick={() =>{login()}}>Connexion</button>
    </div>
  )
}

export default PageConnexion;