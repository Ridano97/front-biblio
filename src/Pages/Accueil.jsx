import React, { useEffect, useState } from "react";
import EmprunteursServices from "../Services/EmprunteursServices";


const Accueil = () => {
    // Variables
    const [emprunteurs, setEmprunteurs] = useState([]);

    //Comportements
    const fetchEmprunteurs = async () => {
        try {
            const response = await EmprunteursServices.getAllEmprunteurs();
            setEmprunteurs(response.data);
            /* console.log(response.data); */
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchEmprunteurs();
    }, [])

    //Affichage
    return <>
        Accueil
        {emprunteurs.map(emprunteur => {
            // Appeler un Component
            return <h2>{emprunteur.CL_Nom} {emprunteur.CL_Prenom}</h2>
        })}
    </>

}

export default Accueil;