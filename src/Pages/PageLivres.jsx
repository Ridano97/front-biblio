import React, { useEffect, useState } from "react";
import LivresServices from "../Services/LivresServices";
import CardsLivre from "../Components/CardsLivre";

const PageLivres = () => {


const [livres, setLivres] = useState([]);

const fetchLivres = async () => {
    try {
        const response = await LivresServices.getAllLivres();
        setLivres(response.data);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
    fetchLivres();
}, [])

//Affichage
return ( <> 
    <div> 
        <div className="d-flex flex-wrap justify-content-center mt-5 mb-5">
            {livres.map((livre, index) => (
                <CardsLivre book={livre} key={index}/>
            ))}
        </div>
    </div>
</> )

}

export default PageLivres ;
