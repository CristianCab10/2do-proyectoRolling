import { Container } from "react-bootstrap"
import NavbarAdmin from "../components/navbar/NavbarAdmin"
import TableDoctor from "../components/tableUsers/TableDoctor" // Asegúrate de tener este componente
import { Link } from "react-router"
import { useEffect, useState } from "react"

const AdminDoctorPage = () => {
  const [doctors, setDoctors] = useState([])

  const obtenerTodosLosDoctores = () => {
    const doctorsLs = JSON.parse(localStorage.getItem("doctors")) || []
    setDoctors(doctorsLs)
  }

  useEffect(() => {
    obtenerTodosLosDoctores()
  }, [])

  return (
    <>
      <NavbarAdmin />
      <Container className="my-3 text-end">
        <Link to={`/admin/createEditDoctor`} className="btn btn-primary">+ Añadir nuevo doctor</Link>
      </Container>
      <Container className="my-5">
        <TableDoctor obtenerTodosLosDoctores={obtenerTodosLosDoctores} />
      </Container>
    </>
  )
}

export default AdminDoctorPage