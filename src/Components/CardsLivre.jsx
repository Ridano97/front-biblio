import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";


const CardsLivre = ({book}) => {

    const navigate = useNavigate();

    console.log(book);
    return <>
    
                <Card className="card" style={{ width: '18rem', margin: '10px' }}>
                    <Card.Img variant="top" src={book.Li_ImageURL} />
                    <Card.Body className="d-flex align-items-center flex-column justify-content)center">
                        <Card.Title className="text-center">{book.Li_Titre}</Card.Title>
                        <Card.Text className="text-center">
                            {book.Li_Description}
                        </Card.Text>
                    </Card.Body>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <Button variant="warning">Emprunter</Button>
                        <Button onClick={() => navigate("/detailslivre/" + book.Li_ID )} className="m-3" variant="primary">Voir détails</Button>
                    </div>
                </Card>
    </>
    
}


export default CardsLivre ;