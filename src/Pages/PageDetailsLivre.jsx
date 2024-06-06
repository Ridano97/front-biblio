import React, { useEffect, useState } from 'react'
import LivresServices from '../Services/LivresServices';
import LivreImage from "../Assets/livreimg.jpeg"
import { useParams } from 'react-router-dom';

const PageDetailsLivre = () => {

    const [livres, setLivres] = useState([]);
    const {id} = useParams();

    const fetchLivreByID = async () => {
        try {
            const response = await LivresServices.getAllLivresById(id);
            setLivres(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect (() => {
        fetchLivreByID();
    }, [])

    return  <>
        <div className='d-flex justify-content-center flex-column align-items-center mt-5 mb-5'>
            <img className='rounded-3' src={LivreImage} alt="imagedunlivre" />
            <h2>{livres.Li_Titre}</h2>
            <h3>{livres.Li_Description}</h3>
            <h3>{livres.Li_Categorie}</h3>
            <h3>{livres.Li_Type}</h3>
            <h3>{livres.Li_AnneeSortie}</h3>
            
        </div>

    </>
}




export default PageDetailsLivre;