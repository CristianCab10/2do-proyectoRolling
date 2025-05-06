import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavbarAdmin from "../components/navbar/NavbarAdmin";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const CreateEditAdminPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const id = new URLSearchParams(location.search).get("id")

  const [formCreateAdmin, setFormCreateAdmin] = useState({
    nombreApellido: "",
    email: "",
  });

  const obtenerAdminPorId = () => {
    const adminsLs = JSON.parse(localStorage.getItem("admins")) || []
    const admin = adminsLs.find((admin) => admin.id === Number(id))

    if (admin) {
      setFormCreateAdmin(admin)
    }
  };

  const handleChangeFormCreateAdmin = (ev) => {
    setFormCreateAdmin({
      ...formCreateAdmin,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleClickFormCreateAdmin = (ev) => {
    ev.preventDefault();

    const adminsLs = JSON.parse(localStorage.getItem("admins")) || []

    const emailExiste = adminsLs.some(
      (admin) => admin.email === formCreateAdmin.email
    );

    if (emailExiste) {
      Swal.fire({
        title: "Este email ya está registrado",
        text: "Por favor, utiliza otro email.",
        icon: "error",
      });
      return;
    }

    if (formCreateAdmin.nombreApellido && formCreateAdmin.email) {
      const nuevoAdmin = {
        id: adminsLs[adminsLs.length - 1]?.id + 1 || 1,
        ...formCreateAdmin,
      };

      adminsLs.push(nuevoAdmin);
      localStorage.setItem("admins", JSON.stringify(adminsLs))

      Swal.fire({
        title: "Admin creado exitosamente!",
        text: "Serás redirigido a la página de Admin!",
        icon: "success",
      });

      setFormCreateAdmin({
        nombreApellido: "",
        email: "",
      });

      setTimeout(() => {
        navigate("/admin");
      }, 500);
    }
  };

  const handleClickFormEditAdmin = (ev) => {
    ev.preventDefault();
    const adminsLs = JSON.parse(localStorage.getItem("admins")) || []
    const adminIndex = adminsLs.findIndex(
      (admin) => admin.id === Number(id)
    );

    if (adminIndex === -1) return

    const emailExiste = adminsLs.some(
      (admin) =>
        admin.email === formCreateAdmin.email && admin.id !== Number(id)
    );

    if (emailExiste) {
      Swal.fire({
        title: "Este email ya está registrado",
        text: "Por favor, utiliza otro email.",
        icon: "error",
      });
      return;
    }

    if (formCreateAdmin.nombreApellido && formCreateAdmin.email) {
      adminsLs[adminIndex] = {
        ...formCreateAdmin,
        id: Number(id),
      };
      localStorage.setItem("admins", JSON.stringify(adminsLs))

      Swal.fire({
        title: "Admin editado exitosamente!",
        text: "Serás redirigido a la página de Admin!",
        icon: "success",
      });

      setFormCreateAdmin({
        nombreApellido: "",
        email: "",
      });

      setTimeout(() => {
        navigate("/admin")
      }, 500);
    }
  };

  useEffect(() => {
    if (id) {
      obtenerAdminPorId()
    }
  }, [id])

  return (
    <>
      <NavbarAdmin />
      <h2 className="text-center my-3">
        {id ? "Editar Admin" : "Crear Nuevo Admin"}
      </h2>
      <hr />
      <Container className="d-flex justify-content-center my-5">
        <Form className="w-25">
          <Form.Group className="mb-3" controlId="idNombreApellido">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control
              type="text"
              name="nombreApellido"
              value={formCreateAdmin.nombreApellido}
              onChange={handleChangeFormCreateAdmin}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="idEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formCreateAdmin.email}
              onChange={handleChangeFormCreateAdmin}
            />
          </Form.Group>

          <div className="text-center">
            <Button
              variant="primary"
              type="submit"
              onClick={
                id ? handleClickFormEditAdmin : handleClickFormCreateAdmin
              }
            >
              {id ? "Editar Admin" : "Agregar Nuevo Admin"}
            </Button>
          </div>
        </Form>
      </Container>
    </>
  )
}

export default CreateEditAdminPage