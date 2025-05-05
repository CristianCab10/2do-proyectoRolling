import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink} from "react-router-dom";

const NavbarDoctor = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="./index.html">
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
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className={"nav-link"} to={"/doctor"}>Turnos</NavLink>
              <NavLink className={"nav-link"} to={"/listaDePacientes"}>LIsta de Pacientes</NavLink>
            </Nav>
            <Nav className="ms-auto">
            <NavLink className={"nav-link"} to={"/"}>Cerrar Sesion</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarDoctor