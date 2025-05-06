import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./NosotrosC.css";

const NosotrosC = () => (
  
  <Container className="py-5">
    <div className="jumbotron jumbotron-fluid bg-light rounded p-4 shadow-sm">
      <div className="container">
        <h1 className="display-4 text-start">¡Bienvenidos!</h1>
        <h2 className="lead fw-bold text-start">
          Dar el primer paso no es fácil.
        </h2>
        <p className="text-start">
          Por eso hemos creado un espacio seguro donde puedas sentirte
          acompañado en cada etapa de la terapia de tu niño
        </p>
      </div>
    </div>

    <Row className="align-items-center my-5">
      <Col md={6}>
        <img
          src="https://static.wixstatic.com/media/56b809_5a69b0ad2376420b86ab3f859d27d879~mv2.png/v1/fill/w_1104,h_640,al_c,q_90,enc_avif,quality_auto/56b809_5a69b0ad2376420b86ab3f859d27d879~mv2.png"
          alt="Nuestro equipo"
          className="img-fluid rounded shadow p-3"
        />
      </Col>
      <Col md={6} className="my-4">
        <h2>¿Quiénes somos?</h2>
        <p>
          Somos un equipo interdisciplinario que integra tres áreas clave:
          Psicología, Fonoaudiología y Ayudante Terapéutico. Nuestra sinergia
          nos permite brindar una atención integral y personalizada.
        </p>
      </Col>
    </Row>

    <Row className="align-items-center my-5">
      <Col md={6} className="my-4">
        <h2>¿Qué hacemos y cómo lo hacemos?</h2>
        <p>
          Nuestra misión es mejorar la salud emocional y comunicacional de los
          niños, trabajando tanto a nivel individual como familiar. Nos
          destacamos por una metodología única que promueve la integración y el
          bienestar en un entorno seguro y contenedor.
        </p>
      </Col>
      <Col md={6}>
        <img
          src="https://hoypyspace.sfo2.cdn.digitaloceanspaces.com/imagenes/2023/03/fono.jpg"
          alt="Servicios"
          className="img-fluid rounded shadow p-3"
        />
      </Col>
    </Row>

    <Col md={6} className="my-4">
      <h3>NUESTROS PROFESIONALES</h3>
      <p>Horarios de atención</p>
    </Col>

    <Row className="py-3 text-center">
      <Col className="m-2 p-3 service-col d-flex flex-column align-items-center bg-secondary text-white rounded">
        <i className="bi bi-gear-fill service-icon fs-2 mb-2"></i>
        <div>PSIC. RITA SANCHIS</div>
        <button
          className="btn btn-light mt-2"
          onClick={() =>
            Swal.fire({
              title: "PSICOLOGIA",
              text: "Lunes a viernes de 08:30 a 12:30 hs.",
              imageUrl:
                "https://universidadeuropea.com/resources/media/images/funciones-psicologo-infantil-800x450.width-640.jpg",
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: "Custom image",
            })
          }
        >
          Ver horarios
        </button>
      </Col>

      <Col className="m-2 p-3 service-col d-flex flex-column align-items-center bg-secondary text-white rounded">
        <i className="bi bi-cloud-download-fill service-icon fs-2 mb-2"></i>
        <div>LIC. ROMINA SANTILLANA</div>
        <button
          className="btn btn-light mt-2"
          onClick={() =>
            Swal.fire({
              title: "FONOAUDIOLOGIA",
              text: "Martes, jueves y viernes de 08:30 a 12:30 hs.",
              imageUrl:
                "https://www.fonoaudiologiamaximo.com.br/wp-content/uploads/2023/12/fonoaudiologiamaximo-tea.jpg",
              imageWidth: 300,
              imageHeight: 200,
              imageAlt: "Custom image",
            })
          }
        >
          Ver horarios
        </button>
      </Col>

      <Col className="m-2 p-3 service-col d-flex flex-column align-items-center bg-secondary text-white rounded">
        <i className="bi bi-shield-lock-fill service-icon fs-2 mb-2"></i>
        <div>TEO. FABRICIO JUAREZ FEIJOO</div>
        <button
          className="btn btn-light mt-2"
          onClick={() =>
            Swal.fire({
              title: "AYUDANTE TERAPEUTICO",
              text: "Lunes, miercoles y jueves de 08:30 a 12:30 hs.",
              imageUrl:
                "https://www.salta.gob.ar/public/images/noticias/90610-en-agosto-comenzara-el-registro-de-titulos-de-acompaniante-terapeutico-20230724000841.jpg",
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: "Custom image",
            })
          }
        >
          Ver horarios
        </button>
      </Col>
    </Row>
  </Container>
);

export default NosotrosC;
