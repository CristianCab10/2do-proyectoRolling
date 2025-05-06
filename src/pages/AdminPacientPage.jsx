import { Container } from "react-bootstrap"
import NavbarAdmin from "../components/navbar/NavbarAdmin"
import TablePacient from "../components/tableUsers/TablePacient"
import { Link } from "react-router"
import { useEffect, useState } from "react"

const AdminPacientPage = () => {
  const [pacients, setPacients] = useState([])

  const obtenerTodosLosPacientes = () => {
    const pacientsLs = JSON.parse(localStorage.getItem("pacients")) || []
    setPacients(pacientsLs)
  }

  useEffect(() => {
    obtenerTodosLosPacientes()
  }, [])

  return (
    <>
      <NavbarAdmin />
      <Container className="my-3 text-end">
        <Link to={`/admin/createEditPacient`} className="btn btn-primary">+ Añadir nuevo paciente</Link>
      </Container>
      <Container className="my-5">
        <TablePacient obtenerTodosLosPacientes={obtenerTodosLosPacientes} />
      </Container>
    </>
  )
}

export default AdminPacientPage