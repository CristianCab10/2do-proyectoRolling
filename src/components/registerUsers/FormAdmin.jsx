import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const FormAdmin = () => {
  const navigate = useNavigate()
  const [errores, setErrores] = useState({})
  const [formAdmin, setFormAdmin] = useState({
    nombreApellido: "",
    email: "",
    contrasenia: "",
    repContrasenia: "",
    terminosCondiciones: false
  })

  const handleChangeFormAdmin = (ev) => {
    const value = ev.target.type === "checkbox" ? ev.target.checked : ev.target.value
    setFormAdmin({ ...formAdmin, [ev.target.name]: value })
  }

  const handleClickFormAdmin = (ev) => {
    ev.preventDefault()
    const erroresReg = {}
    const { nombreApellido, email, contrasenia, repContrasenia, terminosCondiciones } = formAdmin

    if (!nombreApellido) {
      erroresReg.nombreApellido = "Campo Nombre y Apellido está vacío."
    }

    if (!email) {
      erroresReg.email = "Campo Email está vacío.";
    }

    if (!contrasenia) {
      erroresReg.contrasenia = "Campo Contraseña está vacío."
    }

    if (!repContrasenia) {
      erroresReg.repContrasenia = "Campo Repetir Contraseña está vacío."
    }

    if (!terminosCondiciones) {
      erroresReg.terminosCondiciones = "Debes aceptar los Términos y Condiciones."
    }

    setErrores(erroresReg)

    if (
      nombreApellido &&
      email &&
      contrasenia &&
      repContrasenia &&
      terminosCondiciones
    ) {
      if (contrasenia === repContrasenia) {
        const adminsLs = JSON.parse(localStorage.getItem("admins")) || []

        const emailExiste = adminsLs.some(admin => admin.email === email)
        if (emailExiste) {
          Swal.fire({
            icon: "error",
            title: "Este correo ya está registrado",
            text: "Por favor, utiliza un correo diferente."
          });
          return;
        }

        const nuevoAdmin = {
          id: adminsLs[adminsLs.length - 1]?.id + 1 || 1,
          nombreApellido,
          email,
          contrasenia,
          terminosCondiciones,
          rol: "admin",
          login: false
        }

        Swal.fire({
          title: "¡Registro exitoso!",
          icon: "success"
        });

        adminsLs.push(nuevoAdmin)
        localStorage.setItem("admins", JSON.stringify(adminsLs))

        setFormAdmin({
          nombreApellido: "",
          email: "",
          contrasenia: "",
          repContrasenia: "",
          terminosCondiciones: false
        })

        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        Swal.fire({
          icon: "error",
          title: "Las contraseñas no coinciden",
        })
      }
    }
  }

  return (
    <Form className='w-25'>
      <Form.Group className="mb-3" controlId="idNombreApellido">
        <Form.Label>Nombre y Apellido</Form.Label>
        <Form.Control
          type="text"
          className={errores.nombreApellido ? "form-control is-invalid" : "form-control"}
          value={formAdmin.nombreApellido}
          name="nombreApellido"
          onChange={handleChangeFormAdmin}
        />
        {errores.nombreApellido && (
          <p className="text-danger">{errores.nombreApellido}</p>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="idEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          className={errores.email ? "form-control is-invalid" : "form-control"}
          value={formAdmin.email}
          name="email"
          onChange={handleChangeFormAdmin}
        />
        {errores.email && (
          <p className="text-danger">{errores.email}</p>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="idContrasenia">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          className={errores.contrasenia ? "form-control is-invalid" : "form-control"}
          value={formAdmin.contrasenia}
          name="contrasenia"
          onChange={handleChangeFormAdmin}
        />
        {errores.contrasenia && (
          <p className="text-danger">{errores.contrasenia}</p>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="idRepContrasenia">
        <Form.Label>Repetir Contraseña</Form.Label>
        <Form.Control
          type="password"
          className={errores.repContrasenia ? "form-control is-invalid" : "form-control"}
          value={formAdmin.repContrasenia}
          name="repContrasenia"
          onChange={handleChangeFormAdmin}
        />
        {errores.repContrasenia && (
          <p className="text-danger">{errores.repContrasenia}</p>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Aceptar Términos y Condiciones"
          name="terminosCondiciones"
          checked={formAdmin.terminosCondiciones}
          onChange={handleChangeFormAdmin}
        />
        {errores.terminosCondiciones && (
          <p className="text-danger">{errores.terminosCondiciones}</p>
        )}
      </Form.Group>

      <div className="text-center">
        <Button variant="primary" type="submit" onClick={handleClickFormAdmin}>
          Registrarse
        </Button>
      </div>
    </Form>
  )
}

export default FormAdmin