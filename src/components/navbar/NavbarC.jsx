//import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";

function dropdownLogin() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Iniciar Sesión
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Usuarios</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Prestadores</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

const NavbarC = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="./images/IsologoCreciendoColor.png"
              alt="Logo"
              style={{
                width: "300px",
                height: "auto",
                marginInlineStart: "0px",
              }}  
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/Inicio">Inicio</Nav.Link>
              <Nav.Link href="/Nosotros">Sobre nosotros</Nav.Link>
              <Nav.Link href="/contacto">Contacto</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="/RegistroPage">Registrarse</Nav.Link>
              {dropdownLogin()}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
