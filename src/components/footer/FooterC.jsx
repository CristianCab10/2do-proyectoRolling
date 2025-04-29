function mostrarAlerta() {
  Swal.fire({
    title: "Mensaje enviado con éxito!",
    icon: "success",
    draggable: true,
  });
}

const FooterC = () => {
  return (
    <footer
      className="container-fluid bg-dark text-white"
      style={{ height: "250px", padding: "20px 0" }}
    >
      {/* Logo */}
      <div className="container-fluid w-100 px-5 h-100">
        <div className="row">
          <div className="col-lg-2 d-flex align-items-center">
            <ul className="list-unstyled">
              <li>
                <a href="./index.html">
                  <img
                    src="./images/logoBlancoFooter.png"
                    alt="Logo"
                    style={{
                      width: "100px",
                      height: "auto",
                    }}
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* Nosotros y Legales */}
          <div className="col-lg-2">
            <h5>Sobre Nosotros</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#quienes-somos" className="text-white">
                  ¿Quiénes somos?
                </a>
              </li>
              <li>
                <a href="#mision" className="text-white">
                  Misión
                </a>
              </li>
              <li>
                <a href="#vision" className="text-white">
                  Visión
                </a>
              </li>
            </ul>
            <h5 className="mt-3">Legales</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#privacidad" className="text-white">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#terminos" className="text-white">
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="col-lg-2 text-center mb-3 mb-md-0">
            <h5>Redes Sociales</h5>
            <a
              href="https://www.instagram.com/centro.terapeutico.creciendo/"
              target="_blank"
              rel="noopener
              noreferrer"
              className="text-white mx-2"
            >
              <img
                src="./images/iconoInsta.png"
                alt="Logo"
                style={{
                  width: "50px",
                  height: "auto",
                }}
              />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <img
                src="./images/iconoFace.png"
                alt="Logo"
                style={{
                  width: "60px",
                  height: "auto",
                }}
              />
            </a>
          </div>

          {/* Formulario de contacto */}
          <div className="col-lg-3">
            <h5>Contáctanos</h5>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Agregar lógica para enviar el email
                mostrarAlerta();
              }}
            >
              <div className="mb-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Tu email"
                  required
                />
              </div>
              <div className="mb-2">
                <textarea
                  className="form-control"
                  rows="2"
                  placeholder="Tu mensaje"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-sm">
                Enviar mensaje
              </button>
            </form>
          </div>
        
      
      <div className="col-lg-3 text-end">
      <h5 className="text-center">Donde Estamos</h5>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d113971.8787363437!2d-65.31843!3d-26.7883418!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c07f2b1d355%3A0x277edb6b67378768!2sMariano%20Moreno%20723%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1745673496807!5m2!1ses-419!2sa"
        
        
        loading="lazy"
        
        width="300px"
        height="160px"
        style={{ border: 0 }}
       
        
      ></iframe></div></div></div>
    </footer>
  );
};

export default FooterC;
