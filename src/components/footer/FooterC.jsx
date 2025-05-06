import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function mostrarAlertaPrestadores() {
  Swal.fire({
    title: "Bienvenido!",
    text: "Para ser prestador comuníquese al 3814498589",
    imageUrl: "./images/IsologoCreciendoColor.png",
    imageWidth: 400,
    imageHeight: 80,
    imageAlt: "Custom image",
  });
}

function mostrarAlertaMensajeEnviado() {
  Swal.fire({
    title: "Tu mensaje fue enviado con exito!",
    icon: "success",
    draggable: true,
  });
}

const FooterC = () => {
  const navigate = useNavigate();

  const mostrarAlertaTurnos = () => {
    Swal.fire({
      title: "¡Para solicitar turnos debes estar registrado!",
      icon: "warning",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/registerPacient");
      }
    });
  };
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    mostrarAlertaMensajeEnviado();

    // Limpiar campos
    setEmail("");
    setMensaje("");
  };

  return (
    <footer className="container-fluid bg-dark text-white py-4  mt-4">
      <div className="container">
        <div className="row d-flex flex-wrap justify-content-between">
          {/* Logo */}
          <div className="col-12 col-md-2 mb-4 mb-md-0 d-flex align-items-center justify-content-center justify-content-md-start">
            <a href="./index.html">
              <img
                src="./images/logoBlancoFooter.png"
                alt="Logo"
                style={{ width: "100px", height: "auto" }}
              />
            </a>
          </div>

          {/* Sobre nosotros y legales */}
          <div className="col-12 col-md-2 mb-4 mb-md-0">
            <h5>Sobre Nosotros</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="/NosotrosC"
                  className="text-white text-decoration-none"
                >
                  ¿Quiénes somos?
                </a>
              </li>
              <li>
                <button
                  type="submit"
                  onClick={mostrarAlertaTurnos}
                  className="btn btn-primary btn-sm my-2 w-100"
                >
                  TURNOS
                </button>
              </li>
              <li>
                <button
                  type="submit"
                  onClick={mostrarAlertaPrestadores}
                  className="btn btn-primary btn-sm my-2 w-100"
                >
                  SER PRESTADOR
                </button>
              </li>
            </ul>
            <h5 className="mt-3">Legales</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#privacidad"
                  className="text-white text-decoration-none"
                >
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="/TerminosCondicionesPage"
                  className="text-white text-decoration-none"
                >
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="col-12 col-md-2 mb-4 mb-md-0 text-center">
            <h5>Seguinos</h5>
            <a
              href="https://www.instagram.com/centro.terapeutico.creciendo/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <img
                src="./images/iconoInsta.png"
                alt="Instagram"
                style={{ width: "50px" }}
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <img
                src="./images/iconoFace.png"
                alt="Facebook"
                style={{ width: "50px" }}
              />
            </a>
          </div>

          {/* Formulario contacto */}
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <h5>Contáctanos</h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2">
                <textarea
                  className="form-control"
                  rows="2"
                  placeholder="Tu mensaje"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-warning btn-sm w-100">
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Google Maps */}
          <div className="col-12 col-md-3">
            <h5>¿Dónde estamos?</h5>
            <div className="ratio ratio-4x3">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d113971.8787363437!2d-65.31843!3d-26.7883418!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c07f2b1d355%3A0x277edb6b67378768!2sMariano%20Moreno%20723%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1745673496807!5m2!1ses-419!2sa"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterC;
