import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const FormPacient = () => {
  const navigate = useNavigate();
  const [errores, setErrores] = useState({});
  const [formPacient, setFormPacient] = useState({
    nombreApellido: "",
    email: "",
    contrasenia: "",
    repContrasenia: "",
    turnos: [],
    terminosCondiciones: false
  });

  const handleChangeFormPacient = (ev) => {
    const value = ev.target.type === "checkbox" ? ev.target.checked : ev.target.value;
    setFormPacient({ ...formPacient, [ev.target.name]: value });
  };

  const handleClickFormPacient = (ev) => {
    ev.preventDefault();
    const erroresReg = {};
    const { nombreApellido, email, contrasenia, repContrasenia, terminosCondiciones } = formPacient;

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
        const pacientesLs = JSON.parse(localStorage.getItem("pacientes")) || [];

        const emailExiste = pacientesLs.some(paciente => paciente.email === email);
  if (emailExiste) {
    Swal.fire({
      icon: "error",
      title: "Este correo ya está registrado",
      text: "Por favor, utiliza un correo diferente."
    });
    return;
  }

        const nuevoPaciente = {
          id: pacientesLs[pacientesLs.length - 1]?.id + 1 || 1,
          nombreApellido,
          email,
          contrasenia,
          terminosCondiciones,
          rol: "paciente",
          turnos: [],
          login: false
        };

        Swal.fire({
          title: "¡Registro exitoso!",
          icon: "success"
        });

        pacientesLs.push(nuevoPaciente);
        localStorage.setItem("pacientes", JSON.stringify(pacientesLs));

        setFormPacient({
          nombreApellido: "",
          email: "",
          contrasenia: "",
          repContrasenia: "",
          terminosCondiciones: false
        });

        setTimeout(() => {
          navigate("/loginPacient");
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
          value={formPacient.nombreApellido}
          name="nombreApellido"
          onChange={handleChangeFormPacient} maxLength={18}
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
          value={formPacient.email}
          name="email"
          onChange={handleChangeFormPacient} maxLength={26}
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
          value={formPacient.contrasenia}
          name="contrasenia"
          onChange={handleChangeFormPacient} maxLength={10}
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
          value={formPacient.repContrasenia}
          name="repContrasenia"
          onChange={handleChangeFormPacient} maxLength={10}
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
          checked={formPacient.terminosCondiciones}
          onChange={handleChangeFormPacient}
        />
        {errores.terminosCondiciones && (
          <p className="text-danger">{errores.terminosCondiciones}</p>
        )}
      </Form.Group>

      <div className="text-center">
        <Button variant="primary" type="submit" onClick={handleClickFormPacient}>
          Registrarse
        </Button>
      </div>
    </Form>
  )
}

export default FormPacient