import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavbarAdmin from "../components/navbar/NavbarAdmin";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const AdminCreateEditPacientPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const id = new URLSearchParams(location.search).get("id")

  const [formCreatePacient, setFormCreatePacient] = useState({
    nombreApellido: "",
    email: "",
  });

  const obtenerPacientPorId = () => {
    const pacientesLs = JSON.parse(localStorage.getItem("pacientes")) || []
    const pacient = pacientesLs.find((pacient) => pacient.id === Number(id))

    if (pacient) {
      setFormCreatePacient(pacient)
    }
  };

  const handleChangeFormCreatePacient = (ev) => {
    setFormCreatePacient({
      ...formCreatePacient,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleClickFormCreatePacient = (ev) => {
    ev.preventDefault();

    const pacientesLs = JSON.parse(localStorage.getItem("pacientes")) || []

    const emailExiste = pacientesLs.some(
      (pacient) => pacient.email === formCreatePacient.email
    );

    if (emailExiste) {
      Swal.fire({
        title: "Este email ya está registrado",
        text: "Por favor, utiliza otro email.",
        icon: "error",
      });
      return;
    }

    if (formCreatePacient.nombreApellido && formCreatePacient.email) {
      const nuevoPacient = {
        id: pacientesLs[pacientesLs.length - 1]?.id + 1 || 1,
        ...formCreatePacient,
      };

      pacientesLs.push(nuevoPacient);
      localStorage.setItem("pacientes", JSON.stringify(pacientesLs))

      Swal.fire({
        title: "Paciente creado exitosamente!",
        text: "Serás redirigido a la página de Pacientes!",
        icon: "success",
      });

      setFormCreatePacient({
        nombreApellido: "",
        email: "",
      });

      setTimeout(() => {
        navigate("/adminPacient")
      }, 500);
    }
  };

  const handleClickFormEditPacient = (ev) => {
    ev.preventDefault()
    const pacientesLs = JSON.parse(localStorage.getItem("pacientes")) || []
    const pacientIndex = pacientesLs.findIndex(
      (pacient) => pacient.id === Number(id)
    );

    if (pacientIndex === -1) return;

    const emailExiste = pacientesLs.some(
      (pacient) =>
        pacient.email === formCreatePacient.email && pacient.id !== Number(id)
    );

    if (emailExiste) {
      Swal.fire({
        title: "Este email ya está registrado",
        text: "Por favor, utiliza otro email.",
        icon: "error",
      });
      return;
    }

    if (formCreatePacient.nombreApellido && formCreatePacient.email) {
      pacientesLs[pacientIndex] = {
        ...formCreatePacient,
        id: Number(id),
      };
      localStorage.setItem("pacientes", JSON.stringify(pacientesLs))

      Swal.fire({
        title: "Paciente editado exitosamente!",
        text: "Serás redirigido a la página de Pacientes!",
        icon: "success",
      });

      setFormCreatePacient({
        nombreApellido: "",
        email: "",
      });

      setTimeout(() => {
        navigate("/adminPacient")
      }, 500);
    }
  };

  useEffect(() => {
    if (id) {
      obtenerPacientPorId()
    }
  }, [id]);

  return (
    <>
      <NavbarAdmin />
      <h2 className="text-center my-3">
        {id ? "Editar Paciente" : "Crear Nuevo Paciente"}
      </h2>
      <hr />
      <Container className="d-flex justify-content-center my-5">
        <Form className="w-25">
          <Form.Group className="mb-3" controlId="idNombreApellido">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control
              type="text"
              name="nombreApellido"
              value={formCreatePacient.nombreApellido}
              onChange={handleChangeFormCreatePacient}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="idEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formCreatePacient.email}
              onChange={handleChangeFormCreatePacient}
            />
          </Form.Group>

          <div className="text-center">
            <Button
              variant="primary"
              type="submit"
              onClick={id ? handleClickFormEditPacient : handleClickFormCreatePacient}
            >
              {id ? "Editar Paciente" : "Agregar Nuevo Paciente"}
            </Button>
          </div>
        </Form>
      </Container>
    </>
  )
}

export default AdminCreateEditPacientPage