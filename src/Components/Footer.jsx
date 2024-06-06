import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'

const Footer = () => {

    //Etat


    //Comportement



    //Affichage

    return <>
    
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Mood Area©</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="flex-column justify-content-end">
          <Navbar.Text>
            <a href="#login">Qui sommes-nous ?</a>
          </Navbar.Text>
          <Navbar.Text>
            <a href="#login">Mentions légales</a>
          </Navbar.Text>
          <Navbar.Text>
            <a href="#login">Politique de confidentialités</a>
          </Navbar.Text>
          <Navbar.Text>
            <a href="#login">Contact</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>

}

export default Footer;