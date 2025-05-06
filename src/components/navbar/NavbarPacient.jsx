import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate} from "react-router-dom";

const NavbarPacient = () => {
  const navigate = useNavigate()

  const usuariosLog = JSON.parse(sessionStorage.getItem("paciente"))
  const logoutPaciente = (ev) => {
    ev.preventDefault()
    const usuariosLs = JSON.parse(localStorage.getItem("pacientes"))
    const usuario = usuariosLs.find((user) => user.id === usuariosLog.id)
    usuario.login = false

    localStorage.setItem("pacientes" , JSON.stringify(usuariosLs))

    sessionStorage.removeItem("paciente")

    setTimeout(() => {
      navigate("/")
      
    }, 500);
  }
  return (
    
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="./index.html">
            <img
              src="../images/IsologoCreciendoColor.png"
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
              <NavLink className={"nav-link"} to={"/pacient"}>Solicitar un Turno</NavLink>
              <NavLink className={"nav-link"} to={"/listaDeTurnos"}>LIsta de Turnos</NavLink>
            </Nav>
            <Nav className="ms-auto">
            <NavLink className={"nav-link"} to={"/"} onClick={logoutPaciente}>Cerrar Sesion</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarPacient