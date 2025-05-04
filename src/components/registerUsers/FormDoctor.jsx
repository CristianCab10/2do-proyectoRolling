import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const FormDoctor = () => {
  const navigate = useNavigate();
  const [errores, setErrores] = useState({});
  const [formDoctor, setFormDoctor] = useState({
    nombreApellido: "",
    email: "",
    contrasenia: "",
    repContrasenia: "",
    terminosCondiciones: false
  });

  const handleChangeFormDoctor = (ev) => {
    const value = ev.target.type === "checkbox" ? ev.target.checked : ev.target.value;
    setFormDoctor({ ...formDoctor, [ev.target.name]: value });
  };

  const handleClickFormDoctor = (ev) => {
    ev.preventDefault();
    const erroresReg = {};
    const { nombreApellido, email, contrasenia, repContrasenia, terminosCondiciones } = formDoctor;

    if (!nombreApellido) {
      erroresReg.nombreApellido = "Campo Nombre y Apellido está vacío.";
    }

    if (!email) {
      erroresReg.email = "Campo Email está vacío.";
    }

    if (!contrasenia) {
      erroresReg.contrasenia = "Campo Contraseña está vacío.";
    }

    if (!repContrasenia) {
      erroresReg.repContrasenia = "Campo Repetir Contraseña está vacío.";
    }

    if (!terminosCondiciones) {
      erroresReg.terminosCondiciones = "Debes aceptar los Términos y Condiciones.";
    }

    setErrores(erroresReg);

    if (
      nombreApellido &&
      email &&
      contrasenia &&
      repContrasenia &&
      terminosCondiciones
    ) {
      if (contrasenia === repContrasenia) {
        const doctoresLs = JSON.parse(localStorage.getItem("doctores")) || [];

        const emailExiste = doctoresLs.some(doctor => doctor.email === email);
        if (emailExiste) {
          Swal.fire({
            icon: "error",
            title: "Este correo ya está registrado",
            text: "Por favor, utiliza un correo diferente."
          });
          return;
        }

        const nuevoDoctor = {
          id: doctoresLs[doctoresLs.length - 1]?.id + 1 || 1,
          nombreApellido,
          email,
          contrasenia,
          terminosCondiciones,
          rol: "doctor",
          login: false
        };

        Swal.fire({
          title: "¡Registro exitoso!",
          icon: "success"
        });

        doctoresLs.push(nuevoDoctor);
        localStorage.setItem("doctores", JSON.stringify(doctoresLs));

        setFormDoctor({
          nombreApellido: "",
          email: "",
          contrasenia: "",
          repContrasenia: "",
          terminosCondiciones: false
        });

        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        Swal.fire({
          icon: "error",
          title: "Las contraseñas no coinciden",
        });
      }
    }
  };

  return (
    <Form className='w-25'>
      <Form.Group className="mb-3" controlId="idNombreApellido">
        <Form.Label>Nombre y Apellido</Form.Label>
        <Form.Control
          type="text"
          className={errores.nombreApellido ? "form-control is-invalid" : "form-control"}
          value={formDoctor.nombreApellido}
          name="nombreApellido"
          onChange={handleChangeFormDoctor}
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
          value={formDoctor.email}
          name="email"
          onChange={handleChangeFormDoctor}
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
          value={formDoctor.contrasenia}
          name="contrasenia"
          onChange={handleChangeFormDoctor}
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
          value={formDoctor.repContrasenia}
          name="repContrasenia"
          onChange={handleChangeFormDoctor}
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
          checked={formDoctor.terminosCondiciones}
          onChange={handleChangeFormDoctor}
        />
        {errores.terminosCondiciones && (
          <p className="text-danger">{errores.terminosCondiciones}</p>
        )}
      </Form.Group>

      <div className="text-center">
        <Button variant="primary" type="submit" onClick={handleClickFormDoctor}>
          Registrarse
        </Button>
      </div>
    </Form>
  )
}

export default FormDoctor