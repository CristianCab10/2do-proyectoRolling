import { Container } from "react-bootstrap"
import NavbarAdmin from "../components/navbar/NavbarAdmin"
import TableAdmin from "../components/tableUsers/TableAdmin"
import { Link } from "react-router"
import { useEffect, useState } from "react"


const AdminPage = () => {
  const [admins, setAdmins] = useState([])
  const obtenerTodosLosAdmins = () => {
    const adminsLs = JSON.parse(localStorage.getItem("admins")) || []
    setAdmins(adminsLs)
  }

  useEffect(() => {
    obtenerTodosLosAdmins()
  },[])
  return (
    <>
    <NavbarAdmin/>
    <Container className="my-3 text-end">
      <Link to={`createEditAdmin`} className="btn btn-primary">+ Añadir nuevo admin</Link>
    </Container>
    <Container className="my-5">
    <TableAdmin obtenerTodosLosAdmins={obtenerTodosLosAdmins}/>
    </Container>
    </>
  )
}

export default AdminPage