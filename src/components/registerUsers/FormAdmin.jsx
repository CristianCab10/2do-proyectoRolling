import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const FormAdmin = () => {
  const navigate = useNavigate();
  const [errores, setErrores] = useState({});
  const [formAdmin, setFormAdmin] = useState({
    nombreApellido: "",
    email: "",
    contrasenia: "",
    repContrasenia: "",
    terminosCondiciones: false,
  });

  const handleChangeFormAdmin = (ev) => {
    const value =
      ev.target.type === "checkbox" ? ev.target.checked : ev.target.value;
    setFormAdmin({ ...formAdmin, [ev.target.name]: value });
  };

  const handleClickFormAdmin = (ev) => {
    ev.preventDefault();
    const erroresReg = {};
    const {
      nombreApellido,
      email,
      contrasenia,
      repContrasenia,
      terminosCondiciones,
    } = formAdmin;

    if (!nombreApellido) erroresReg.nombreApellido = "Campo obligatorio.";
    if (!email) erroresReg.email = "Campo obligatorio.";
    if (!contrasenia) erroresReg.contrasenia = "Campo obligatorio.";
    if (!repContrasenia) erroresReg.repContrasenia = "Campo obligatorio.";
    if (!terminosCondiciones)
      erroresReg.terminosCondiciones = "Debes aceptar los Términos.";

    setErrores(erroresReg);

    if (
      nombreApellido &&
      email &&
      contrasenia &&
      repContrasenia &&
      terminosCondiciones
    ) {
      if (contrasenia === repContrasenia) {
        let adminsLs = [];
        try {
          const data = JSON.parse(localStorage.getItem("admins"));
          if (Array.isArray(data)) adminsLs = data;
        } catch (error) {
          console.error("Error al leer admins del localStorage:", error);
        }

        const emailExiste = adminsLs.some((admin) => admin.email === email);
        if (emailExiste) {
          Swal.fire({
            icon: "error",
            title: "Este correo ya está registrado",
            text: "Por favor, utiliza un correo diferente.",
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
          login: false,
        };

        Swal.fire({ title: "¡Registro exitoso!", icon: "success" });
        adminsLs.push(nuevoAdmin);
        localStorage.setItem("admins", JSON.stringify(adminsLs));

        setFormAdmin({
          nombreApellido: "",
          email: "",
          contrasenia: "",
          repContrasenia: "",
          terminosCondiciones: false,
        });

        setTimeout(() => navigate("/loginAdmin"), 1500);
      } else {
        Swal.fire({ icon: "error", title: "Las contraseñas no coinciden" });
      }
    }
  };

  return (
    <Container className="container-fluid mt-5 bg-secondary p-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="animate__animated animate__fadeInDown shadow bg-secondary">
            <Card.Body>
              <div className="text-center mb-4">
                <Image
                  src="../images/logoBlancoFooter.png"
                  roundedCircle
                  alt="Logo"
                  width={80}
                  height={80}
                />
                <h4 className="mt-3 text-white text-center">
                  Registro de Administrador
                </h4>
              </div>

              <Form>
                <Form.Group className="mb-3" controlId="idNombreApellido">
                  <Form.Label className="text-white">
                    Nombre y Apellido
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="nombreApellido"
                    value={formAdmin.nombreApellido}
                    onChange={handleChangeFormAdmin}
                    isInvalid={!!errores.nombreApellido}
                    maxLength={18}
                  />
                  <Form.Text className="text-danger">
                    {errores.nombreApellido}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="idEmail">
                  <Form.Label className="text-white">Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formAdmin.email}
                    onChange={handleChangeFormAdmin}
                    isInvalid={!!errores.email}
                    maxLength={26}
                  />
                  <Form.Text className="text-danger">{errores.email}</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="idContrasenia">
                  <Form.Label className="text-white">Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    name="contrasenia"
                    value={formAdmin.contrasenia}
                    onChange={handleChangeFormAdmin}
                    isInvalid={!!errores.contrasenia}
                    maxLength={10}
                  />
                  <Form.Text className="text-danger">
                    {errores.contrasenia}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="idRepContrasenia">
                  <Form.Label className="text-white">
                    Repetir Contraseña
                  </Form.Label>
                  <Form.Control
                    type="password"
                    name="repContrasenia"
                    value={formAdmin.repContrasenia}
                    onChange={handleChangeFormAdmin}
                    isInvalid={!!errores.repContrasenia}
                    maxLength={10}
                  />
                  <Form.Text className="text-danger">
                    {errores.repContrasenia}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Aceptar Términos y Condiciones"
                    name="terminosCondiciones"
                    checked={formAdmin.terminosCondiciones}
                    onChange={handleChangeFormAdmin}
                    isInvalid={!!errores.terminosCondiciones}
                  />
                  <Form.Text className="text-white">
                    {errores.terminosCondiciones}
                  </Form.Text>
                </Form.Group>

                <div className="text-center">
                  <Button
                    variant="warning"
                    type="submit"
                    onClick={handleClickFormAdmin}
                  >
                    Registrarse
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FormAdmin;
