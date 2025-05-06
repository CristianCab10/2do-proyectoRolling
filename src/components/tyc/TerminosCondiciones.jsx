import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TerminosCondiciones.css";

const TerminosCondiciones = () => {
  return (
    <Container className="terminos-container-fluid">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <img
            className="my-5"
            src="./images/logoCreciendoColor.png"
            alt="Logo"
            style={{
              width: "120px",
              height: "auto",
              marginInlineStart: "2px",
            }}
          />

          <Card className="terminos-card">
            <Card.Body>
              <Card.Title className="terminos-card-title">
                Términos y Condiciones
              </Card.Title>
              <Card.Text className="terminos-card-text">
                Al acceder y utilizar los servicios ofrecidos por nuestro Centro
                Terapéutico, usted acepta cumplir con los siguientes términos y
                condiciones. La información proporcionada en este sitio no
                sustituye la orientación de un profesional de la salud. Todos
                los datos personales se manejarán de acuerdo con nuestra
                política de privacidad. El uso indebido de los servicios o el
                incumplimiento de las normas podrá resultar en la terminación
                del acceso al centro.
              </Card.Text>

              <Link to="/">
                <Button variant="warning">Volver al inicio</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TerminosCondiciones;
