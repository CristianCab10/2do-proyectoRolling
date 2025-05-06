import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Error404.css";

const Error404 = () => {
  return (
    <div className="error404-background">
      <Container
        fluid
        className="error404-overlay d-flex align-items-center justify-content-center text-center"
      >
        <Row>
          <Col>
            <img
              src="./images/icono404.png"
              alt="icono triste"
              style={{ width: "130px" }}
            />
            <h1 className="error-code">404</h1>
            <h2 className="error-message">Página no encontrada</h2>
            <p className="error-description">
              Lo sentimos, la página que buscas no existe.
            </p>
            <Button className="btn-warning" href="/">
              Volver al inicio
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Error404;
