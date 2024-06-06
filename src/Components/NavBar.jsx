import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {

    //Etat


    //Comportement
    const token = localStorage.getItem("token");



    //Affichage
    return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Mood Area</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/livre">Livres</Nav.Link>
            <Nav.Link href="/auteur">Auteurs</Nav.Link>
            <NavDropdown title="Bibliothèque" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/ajouter">Ajouter</NavDropdown.Item>
              <NavDropdown.Item href="/modifier">
                Modifier
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/livre">
                Emprunter
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex align-items-center justify-content-center">
            {token? "" : (<Nav.Link className='m-3' href="/connexion">Connexion</Nav.Link>)}
            <Nav.Link className='me-3' href="/inscription">Inscription</Nav.Link>
            <Form.Control
              type="search"
              placeholder="Livres, Auteurs ..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Rechercher</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    )
}


export default NavBar;