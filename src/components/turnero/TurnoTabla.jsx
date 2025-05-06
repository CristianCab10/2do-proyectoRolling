import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';


const TurnoTabla = ({ usuario }) => {
  const [turnos, setTurnos] = useState([]);
  const [editando, setEditando] = useState(null);
  const [nuevaFecha, setNuevaFecha] = useState('');
  const [nuevaHora, setNuevaHora] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!usuario) return;
    const t = JSON.parse(localStorage.getItem('turnos')) || [];
    const misTurnos = t.filter(turno => turno.paciente === usuario.nombreApellido);
    setTurnos(misTurnos);
  }, [usuario]);

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
        const nuevosTurnos = actualizados.filter(t => t.medico === usuario.nombreApellido);
        setTurnos(nuevosTurnos);
  
        Swal.fire('Cancelado', 'El turno fue cancelado.', 'success');
      }
    });
  };

  const iniciarEdicion = (turno) => {
    setEditando(turno);
    setNuevaFecha(turno.fecha);
    setNuevaHora(turno.hora);
    setShowModal(true);
  };

  const guardarCambios = () => {
    const todos = JSON.parse(localStorage.getItem('turnos')) || [];
    const actualizados = todos.map(t =>
      t.id === editando.id
        ? { ...t, fecha: nuevaFecha, hora: nuevaHora, estado: 'Pendiente' }
        : t
    );
    localStorage.setItem('turnos', JSON.stringify(actualizados));
    const nuevos = actualizados.filter(t => t.paciente === usuario.nombreApellido);
    setTurnos(nuevos);
    setShowModal(false);
    setEditando(null);
  };

  return (
    <div className="container mt-4">
      <h2 className="fw-semibold">Mis Turnos</h2>
      {turnos.length === 0 ? (
        <p>No tenés turnos registrados.</p>
      ) : (
        <table className="table table-bordered mt-2 text-center align-items-center">
          <thead className="table-light">
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Médico</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {turnos.map(t => (
              <tr key={t.id}>
                <td>{t.fecha}</td>
                <td>{t.hora}</td>
                <td>{t.medico}</td>
                <td>{t.estado}</td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2 my-2"
                    onClick={() => iniciarEdicion(t)}
                  >
                    Editar
                  </Button>
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

      {/* Modal de edición */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Turno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nueva Fecha</Form.Label>
              <Form.Control
                type="date"
                value={nuevaFecha}
                onChange={(e) => setNuevaFecha(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nueva Hora</Form.Label>
              <Form.Control
                type="time"
                value={nuevaHora}
                onChange={(e) => setNuevaHora(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={guardarCambios}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TurnoTabla;
