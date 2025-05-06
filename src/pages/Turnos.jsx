import React, { useState, useEffect } from 'react';
import TurnoSelector from '../components/turnero/TurnoSelector';
import TurnoTabla from '../components/turnero/TurnoTabla';
import SeleccionarUsuario from '../components/turnero/SeleccionarUsuario';
import NavbarPacient from '../components/navbar/NavbarPacient';
import { Container } from 'react-bootstrap';
const Turnos = () => {

  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem('paciente');
    if (storedUser) setUsuario(JSON.parse(storedUser));
  }, []);

  return (
    <>
    <NavbarPacient/>
    <Container className='d-block'>

    <div className="p-4 font-sans">
      <h1 className="text-2xl font-bold my-4">Sistema de Turnos Médicos</h1>
      
      {!usuario ? (
        <SeleccionarUsuario setUsuario={setUsuario} />
      ) : (
        <>
          <p className="my-5">Bienvenido, {usuario.nombreApellido} ({usuario.rol})</p>
          
          <TurnoSelector usuario={usuario} />
          <TurnoTabla usuario={usuario} />
        </>
      )}
    </div>
    </Container>
    </>
  );
    
}

export default Turnos