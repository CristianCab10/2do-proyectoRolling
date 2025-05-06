import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate} from "react-router-dom";

const NavbarAdmin = () => {
  const navigate = useNavigate()

  const usuariosLog = JSON.parse(sessionStorage.getItem("usuario"))
  const logoutAdmin = (ev) => {
    ev.preventDefault()
    const usuariosLs = JSON.parse(localStorage.getItem("admins"))
    const usuario = usuariosLs.find((user) => user.id === usuariosLog.id)
    usuario.login = false

    localStorage.setItem("admins" , JSON.stringify(usuariosLs))

    sessionStorage.removeItem("usuario")

    setTimeout(() => {
      navigate("/")
      
    }, 500);
  }
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href={"/"}>
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className={"nav-link"} to={"/admin"}>Administradores</NavLink>
              <NavLink className={"nav-link"} to={"/adminPacient"}>Pacientes</NavLink>
              <NavLink className={"nav-link"} to={"/adminDoctor"}>Doctores</NavLink>
            </Nav>
            <Nav className="ms-auto">
            <NavLink className={"nav-link"}  to={"#"} onClick={logoutAdmin}>Cerrar Sesion</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarAdmin