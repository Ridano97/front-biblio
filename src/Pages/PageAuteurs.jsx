import React, { useEffect, useState } from "react";
import AuteursServices from "../Services/AuteursService";
import CardsAuteur from "../Components/CardsAuteurs";


const PageAuteurs = () => {


const [auteurs, setAuteurs] = useState([]);

const fetchAuteurs = async () => {
    try {
        const response = await AuteursServices.getAllAuteurs();
        setAuteurs(response.data);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
    fetchAuteurs();
}, [])

//Affichage
return ( <> 
    <div> 
        <div className="d-flex flex-wrap justify-content-center mt-5 mb-5">
            {auteurs.map((auteur, index) => (
            <CardsAuteur ecrivain={auteur} key={index}/>
            ))}
        </div>
    </div>
</> )

}

export default PageAuteurs ;