import React, { useEffect } from 'react';

const SeleccionarUsuario = ({ setUsuario }) => {
  useEffect(() => {
    const pacienteSS = sessionStorage.getItem("paciente");
    if (pacienteSS) {
      const paciente = JSON.parse(pacienteSS);
      setUsuario(paciente);
    }
  }, [setUsuario]);

  return (
    <div className="my-4">
      <p>Cargando paciente desde sesión...</p>
    </div>
  );
};

export default SeleccionarUsuario;