import React from 'react'

import TurnosMedico from '../components/turnero/TurnosMedico';
import NavbarDoctor from '../components/navbar/NavbarDoctor';

const usuario = JSON.parse(sessionStorage.getItem("doctor"));

const TurnosMedPage = () => {
  return (
    <>
    <NavbarDoctor/>
    <div className="p-4">
    {usuario?.rol === 'doctor' && <TurnosMedico usuario={usuario} />}
  </div>
  </>
  )
}

export default TurnosMedPage