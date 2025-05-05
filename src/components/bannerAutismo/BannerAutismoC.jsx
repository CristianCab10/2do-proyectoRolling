import React from "react";
import "./BannerAutismo.css"; 

const BannerAutismoC = () => {
  return (
    <div className="banner-container">
      <div className="shapes-container">
        <div className="square"></div>
        <div className="circle"></div>
        <div className="square"></div>
        <div className="rectangle"></div>
        <div className="rectangle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <h4 className="my-3">SEÑALES</h4>
      <h5 className="my-2 p-2 justify-content-center">
        Si tu niño presenta dificultades en la interacción social, problemas de
        comunicación, comportamientos repetitivos e intereses restringidos,
        alteraciones en el procesamiento sensorial, dificultades en la
        adaptación a cambios, falta de contacto visual, apego a objetos
        específicos, ecolalia, dificultades para entender las emociones ajenas y
        patrones de movimiento inusuales, consulta a un especialista
      </h5>

      <h5 className="p-2 m-5 text-white bg-danger">
        "El diagnóstico temprano y la intervención temprana son cruciales para
        el desarrollo de la persona".
      </h5>
    </div>
  );
};

export default BannerAutismoC;
