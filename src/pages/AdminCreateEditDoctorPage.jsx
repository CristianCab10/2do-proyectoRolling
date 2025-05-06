import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavbarAdmin from "../components/navbar/NavbarAdmin";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const AdminCreateEditDoctorPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id")

  const [formCreateDoctor, setFormCreateDoctor] = useState({
    nombreApellido: "",
    email: "",
  });

  const obtenerDoctorPorId = () => {
    const doctoresLs = JSON.parse(localStorage.getItem("doctores")) || []
    const doctor = doctoresLs.find((doctor) => doctor.id === Number(id))

    if (doctor) {
      setFormCreateDoctor(doctor);
    }
  };

  const handleChangeFormCreateDoctor = (ev) => {
    setFormCreateDoctor({
      ...formCreateDoctor,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleClickFormCreateDoctor = (ev) => {
    ev.preventDefault();

    const doctoresLs = JSON.parse(localStorage.getItem("doctores")) || []

    const emailExiste = doctoresLs.some(
      (doctor) => doctor.email === formCreateDoctor.email
    );

    if (emailExiste) {
      Swal.fire({
        title: "Este email ya está registrado",
        text: "Por favor, utiliza otro email.",
        icon: "error",
      });
      return;
    }

    if (formCreateDoctor.nombreApellido && formCreateDoctor.email) {
      const nuevoDoctor = {
        id: doctoresLs[doctoresLs.length - 1]?.id + 1 || 1,
        ...formCreateDoctor,
      };

      doctoresLs.push(nuevoDoctor);
      localStorage.setItem("doctores", JSON.stringify(doctoresLs))

      Swal.fire({
        title: "Doctor creado exitosamente!",
        text: "Serás redirigido a la página de Doctores!",
        icon: "success",
      });

      setFormCreateDoctor({
        nombreApellido: "",
        email: "",
      });

      setTimeout(() => {
        navigate("/adminDoctor")
      }, 500);
    }
  };

  const handleClickFormEditDoctor = (ev) => {
    ev.preventDefault();
    const doctoresLs = JSON.parse(localStorage.getItem("doctores")) || []
    const doctorIndex = doctoresLs.findIndex(
      (doctor) => doctor.id === Number(id)
    );

    if (doctorIndex === -1) return;

    const emailExiste = doctoresLs.some(
      (doctor) =>
        doctor.email === formCreateDoctor.email && doctor.id !== Number(id)
    );

    if (emailExiste) {
      Swal.fire({
        title: "Este email ya está registrado",
        text: "Por favor, utiliza otro email.",
        icon: "error",
      });
      return;
    }

    if (formCreateDoctor.nombreApellido && formCreateDoctor.email) {
      doctoresLs[doctorIndex] = {
        ...formCreateDoctor,
        id: Number(id),
      };
      localStorage.setItem("doctores", JSON.stringify(doctoresLs))

      Swal.fire({
        title: "Doctor editado exitosamente!",
        text: "Serás redirigido a la página de Doctores!",
        icon: "success",
      });

      setFormCreateDoctor({
        nombreApellido: "",
        email: "",
      });

      setTimeout(() => {
        navigate("/adminDoctor")
      }, 500);
    }
  };

  useEffect(() => {
    if (id) {
      obtenerDoctorPorId()
    }
  }, [id]);

  return (
    <>
      <NavbarAdmin />
      <h2 className="text-center my-3">
        {id ? "Editar Doctor" : "Crear Nuevo Doctor"}
      </h2>
      <hr />
      <Container className="d-flex justify-content-center my-5">
        <Form className="w-25">
          <Form.Group className="mb-3" controlId="idNombreApellido">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control
              type="text"
              name="nombreApellido"
              value={formCreateDoctor.nombreApellido}
              onChange={handleChangeFormCreateDoctor}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="idEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formCreateDoctor.email}
              onChange={handleChangeFormCreateDoctor}
            />
          </Form.Group>

          <div className="text-center">
            <Button
              variant="primary"
              type="submit"
              onClick={id ? handleClickFormEditDoctor : handleClickFormCreateDoctor}
            >
              {id ? "Editar Doctor" : "Agregar Nuevo Doctor"}
            </Button>
          </div>
        </Form>
      </Container>
    </>
  )
}

export default AdminCreateEditDoctorPage