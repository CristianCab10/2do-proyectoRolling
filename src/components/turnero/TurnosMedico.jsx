  import React, { useEffect, useState } from 'react';
  import { Container } from 'react-bootstrap';

  const TurnosMedico = () => {
    const [turnos, setTurnos] = useState([]);
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
      const user = JSON.parse(sessionStorage.getItem('doctor'));
      console.log('Usuario logueado:', user);
      setUsuario(user);

      if (user?.rol === 'doctor') {
        const todos = JSON.parse(localStorage.getItem('turnos')) || [];
        const misTurnos = todos.filter(t => t.medico === user.nombreApellido);
        setTurnos(misTurnos);
      }
    }, []);

    const actualizarEstado = (id, nuevoEstado) => {
      const todos = JSON.parse(localStorage.getItem('turnos')) || [];
      const actualizados = todos.map(t =>
        t.id === id ? { ...t, estado: nuevoEstado } : t
      );
      localStorage.setItem('turnos', JSON.stringify(actualizados));

      if (usuario) {
        const nuevosTurnos = actualizados.filter(t => t.medico === usuario.nombreApellido);
        setTurnos(nuevosTurnos);
      }
    };

    if (!usuario || usuario.rol !== 'doctor') return null;

    const cancelarTurno = (id) => {
      Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción eliminará el turno.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'No, volver'
      }).then((result) => {
        if (result.isConfirmed) {
          const todos = JSON.parse(localStorage.getItem('turnos')) || [];
          const actualizados = todos.filter(t => t.id !== id);
          localStorage.setItem('turnos', JSON.stringify(actualizados));
    
          if (usuario) {
            const nuevosTurnos = actualizados.filter(t => t.medico === usuario.nombreApellido);
            setTurnos(nuevosTurnos);
          }
    
          Swal.fire('Eliminado', 'El turno fue eliminado.', 'success');
        }
      });
    };

    return (
      <Container className='d-flex justify-content-center' >
      <div className="mt-4">
        <h2 className="font-semibold">Turnos con Pacientes</h2>
        {turnos.length === 0 ? (
          <p>No hay turnos asignados.</p>
        ) : (
          <table className="w-full border mt-2 p-5">
            <thead>
              <tr>
                <th className="border p-1">Fecha</th>
                <th className="border p-1">Hora</th>
                <th className="border p-1">Paciente</th>
                <th className="border p-1">Estado</th>
                <th className="border p-1">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {turnos.map(t => (
                <tr key={t.id}>
                  <td className="border p-1">{t.fecha}</td>
                  <td className="border p-1">{t.hora}</td>
                  <td className="border p-1">{t.paciente || '-'}</td>
                  <td className="border p-1">{t.estado}</td>
                  <td className="border p-1">
                    <button
                      className="my-2 btn btn-success"
                      onClick={() => actualizarEstado(t.id, 'Aceptado')}>
                      Aceptar
                    </button>
                    <button
                    className="my-2 btn btn-danger"
                      onClick={() => cancelarTurno(t.id)}
                      >
                        Cancelar
                      </button>

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

  export default TurnosMedico;
