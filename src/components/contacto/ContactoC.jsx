import React, { useState } from "react";
import Swal from "sweetalert2";
import "./ContactoC.css";
import NavbarC from "../navbar/NavbarC";

const ContactoC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    codigoArea: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí podrías agregar validaciones adicionales o enviar los datos

    Swal.fire({
      icon: "success",
      title: "Mensaje enviado con éxito",
      confirmButtonColor: "#3085d6",
    });

    // Limpiar el formulario
    setFormData({
      nombre: "",
      correo: "",
      codigoArea: "",
      telefono: "",
      mensaje: "",
    });
  };

  return (

    <>
    
    <div
      className="contacto-container"
      style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}
    >
      {/* Columna 1: Formulario */}
      <form onSubmit={handleSubmit} style={{ flex: 1, minWidth: "300px" }}>
        <h2 className="titulos">Contacto</h2>
        <div>
          <label>Nombre y Apellido *</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Correo Electrónico *</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <div>
            <label>Cód. Área *</label>
            <input
              type="text"
              name="codigoArea"
              value={formData.codigoArea}
              onChange={handleChange}
              maxLength="4"
              required
            />
          </div>
          <div>
            <label>Teléfono *</label>
            <input
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <label>Mensaje *</label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>

      {/* Columna 2: Mapa y Datos */}
      <div style={{ flex: 1, minWidth: "300px" }}>
        <h2 className="titulos text-start">Ubicación</h2>
        <iframe
          title="Mapa de ubicación"
          src="https://www.google.com/maps?q=Calle+Moreno+723,+San+Miguel+de+Tucumán&output=embed"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <h3 style={{ marginTop: "1rem" }} className="titulos text-start">
          Domicilio
        </h3>
        <p className="textos-contacto">
          Calle Moreno 723, San Miguel de Tucumán, Tucumán, Argentina
        </p>
        <p className="textos-contacto">Email: centroCreciendo@gmail.com</p>
        <p className="textos-contacto">Tel: +54 381 1234567</p>
      </div>
    </div>
    </>
  );
};


export default ContactoC;
