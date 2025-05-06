import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Swal from 'sweetalert2';

const TabPacAdmin = () => {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    const t = JSON.parse(localStorage.getItem('turnos')) || [];
    setTurnos(t);
  }, []);

  const cancelarTurno = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción cancelará el turno.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, cancelar',
      cancelButtonText: 'No, volver'
    }).then((result) => {
      if (result.isConfirmed) {
        const todos = JSON.parse(localStorage.getItem('turnos')) || [];
        const actualizados = todos.map(t =>
          t.id === id ? { ...t, estado: 'Cancelado' } : t
        );
        localStorage.setItem('turnos', JSON.stringify(actualizados));
        setTurnos(actualizados);
        Swal.fire('Cancelado', 'El turno fue cancelado.', 'success');
      }
    });
  };

  return (
    <Container className='text-center'>
    <div className="container mt-4">
      <h2 className="fw-semibold">Todos los Turnos</h2>
      {turnos.length === 0 ? (
        <p>No hay turnos registrados.</p>
      ) : (
        <table className="table table-bordered mt-2 text-center align-items-center">
          <thead className="table-light">
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Paciente</th>
              <th>Médico</th>
              <th>Estado</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {turnos.map(t => (
              <tr key={t.id}>
                <td>{t.fecha}</td>
                <td>{t.hora}</td>
                <td>{t.paciente}</td>
                <td>{t.medico}</td>
                <td>{t.estado}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => cancelarTurno(t.id)}
                  >
                    Cancelar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </Container>
  );
};

export default TabPacAdmin;
