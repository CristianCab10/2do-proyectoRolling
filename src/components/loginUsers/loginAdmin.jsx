import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const LoginAdmin = () => {
  const navigate = useNavigate();
  const [formLogin, setFormLogin] = useState({
    email: '',
    contrasenia: ''
  });
  const [errores, setErrores] = useState({});

  const handleChangeLogin = (ev) => {
    setFormLogin({ ...formLogin, [ev.target.name]: ev.target.value });
  };

  const handleClickLoginAdmin = (ev) => {
    ev.preventDefault();
    const erroresLogin = {};

    const { email, contrasenia } = formLogin;

    if (!email) erroresLogin.email = "Campo Email está vacío.";
    if (!contrasenia) erroresLogin.contrasenia = "Campo Contraseña está vacío.";

    setErrores(erroresLogin);

    if (email && contrasenia) {
      const admins = JSON.parse(localStorage.getItem("admins")) || [];
      const admin = admins.find(a => a.email === email && a.contrasenia === contrasenia);
      sessionStorage.setItem("usuario", JSON.stringify(admin))

      if (admin) {
        admin.login = true;
        const nuevosAdmins = admins.map(a =>
          a.email === email ? admin : a
        );
        localStorage.setItem("admins", JSON.stringify(nuevosAdmins));

        Swal.fire({
          icon: "success",
          title: `Bienvenido ${admin.nombreApellido}!`
        });

        setTimeout(() => {
          navigate("/admin");
        }, 1500);
      } else {
        Swal.fire({
          icon: "error",
          title: "ERROR",
          text: "Email y/o Contraseña incorrecto."
        });
      }
    }
  };

  return (
    
    
    <Container className='d-flex justify-content-center my-5'>
      
      <Form className='w-25'>
        <Form.Group className="mb-3" controlId="adminEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formLogin.email}
            onChange={handleChangeLogin}
            maxLength={26}
            className={errores.email ? "form-control is-invalid" : "form-control"}
          />
          {errores.email && (
            <p className="text-danger">{errores.email}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="adminPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="contrasenia"
            value={formLogin.contrasenia}
            onChange={handleChangeLogin}
            maxLength={10}
            className={errores.contrasenia ? "form-control is-invalid" : "form-control"}
          />
          {errores.contrasenia && (
            <p className="text-danger">{errores.contrasenia}</p>
          )}
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit" onClick={handleClickLoginAdmin}>
            Iniciar Sesión
          </Button>
        </div>
      </Form>
    </Container>
  );
};
export default LoginAdmin