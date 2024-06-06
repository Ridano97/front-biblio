import React, { useState } from 'react'
import instance from '../API/Axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const PageInscription = () => {

    const [prenom, setPrenom] = useState("");
    const [nom, setNom] = useState("");
    const [ville, setVille] = useState("");
    const [telephone, setTelephone] = useState("");
    const [adresse, setAdresse] = useState("");
    const [codepostal, setCodePostal] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 


        const register = () => {
                instance.post('/auth/register', {
                    "Em_Nom": prenom,
                    "Em_Prenom": nom,
                    "Em_Ville": ville,
                    "Em_Telephone": telephone,
                    "Em_Adresse": adresse,
                    "Em_CodePostal": codepostal,
                    "Em_Email": email,
                    "Em_password": password
                })
                .then(function (response) {
                    toast.success(response.data.message);
                    navigate("/connexion");
                  })
                  .catch(function (error) {
                    toast.error(error.message);
                  });
        
        }

    return (
    <> 
      <div className='d-flex flex-wrap justify-content-center flex-column align-items-center m-5'> 
      <h2>Inscription</h2>
      <label htmlFor="">Prénom</label>
      <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
      <label htmlFor="">Nom</label>
      <input type="text"  value={nom} onChange={(e) => setNom(e.target.value)} />
      <label htmlFor="">Ville</label>
      <input type="text" value={ville} onChange={(e) => setVille(e.target.value)} />
      <label htmlFor="">Téléphone</label>
      <input type="number"  value={telephone} onChange={(e) => setTelephone(e.target.value)} />
      <label htmlFor="">Adresse</label>
      <input type="text"  value={adresse} onChange={(e) => setAdresse(e.target.value)} />
      <label htmlFor="">Code Postal</label>
      <input type="number"  value={codepostal} onChange={(e) => setCodePostal(e.target.value)} />
      <label htmlFor="">Email</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="">Mot de passe</label>
      <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className='m-4' onClick={register}>Valider</button>
    </div>

    </>
    )
}



export default PageInscription;