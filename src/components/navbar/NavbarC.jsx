import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink} from "react-router";

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

              <NavLink className={"nav-link"} to={"/"}>Inicio</NavLink>
              <NavLink className={"nav-link"} to={"/aboutUs"}>Sobre nosotros</NavLink>
              <NavLink className={"nav-link"} to={"/contact"}>Contacto</NavLink>
            </Nav>
            <Nav className="ms-auto">
              <NavLink className={"nav-link"} to={"/login"}>Login</NavLink>
              <NavDropdown title="Registrarse" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/registerPacient">Paciente</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/registerDoctor">Doctor</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/registerAdmin">Admin</NavDropdown.Item>
              </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
