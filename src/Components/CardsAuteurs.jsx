import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";


const CardsAuteur = ({ecrivain}) => {

    const navigate = useNavigate();
    console.log(ecrivain);


    return <>
    
                <Card className="card" style={{ width: '18rem', margin: '10px' }}>
                    {/* <Card.Img variant="top" src={ecrivain.Li_ImageURL} /> */}
                    <Card.Body className="d-flex align-items-center flex-column justify-content)center">
                        <Card.Title className="text-center">{ecrivain.Au_Nom }{ecrivain.Au_Prenom}</Card.Title>
                        <Card.Text className="text-center">
                            {ecrivain.Au_type}
                            {ecrivain.Au_Annee}
                            {ecrivain.Au_NbLivres}

                        </Card.Text>
                    </Card.Body>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <Button onClick={() => navigate("/detailslivre/" + ecrivain.Au_ID )} className="m-3" variant="primary">En savoir plus</Button>
                    </div>
                </Card>
    </>
    
}


export default CardsAuteur ;