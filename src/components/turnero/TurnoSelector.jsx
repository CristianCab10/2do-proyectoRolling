import React, { useState, useEffect } from 'react';
import { generarTurnosDia, guardarTurnoLocal } from '../utils/turnosUtils';

const TurnoSelector = () => {
  const [fecha, setFecha] = useState('');
  const [turnos, setTurnos] = useState([]);
  const [doctores, setDoctores] = useState([]);
  const [doctorSeleccionado, setDoctorSeleccionado] = useState('');
  const [paciente, setPaciente] = useState(null);

  useEffect(() => {
    const doctoresLS = JSON.parse(localStorage.getItem('doctores')) || [];
    setDoctores(doctoresLS);

    const pacienteSS = JSON.parse(sessionStorage.getItem('paciente'));
    setPaciente(pacienteSS);
  }, []);

  const manejarFecha = e => {
    const f = e.target.value;
    setFecha(f);
    setTurnos(generarTurnosDia(f));
  };

  const reservar = hora => {
    if (!doctorSeleccionado || !paciente) {
      alert("Selecciona un doctor y asegúrate de estar logueado como paciente.");
      return;
    }

    const nuevoTurno = {
      id: Date.now(),
      fecha,
      hora,
      paciente: paciente.nombreApellido,
      medico: doctorSeleccionado,
      estado: 'pendiente'
    };

    guardarTurnoLocal(nuevoTurno);
    alert('Turno reservado');
  };

  if (!paciente || paciente.rol !== 'paciente') return null;

  return (
    <div className="my-4">
      <h2 className="font-semibold mb-2">Seleccionar Turno</h2>

      <label className="block mb-1">Selecciona un doctor:  </label>
      <select
        value={doctorSeleccionado}
        onChange={e => setDoctorSeleccionado(e.target.value)}
        className="border p-1 m-2"
      >
        <option value="">-- Selecciona --</option>
        {doctores.map(doc => (
          <option key={doc.nombreApellido} value={doc.nombreApellido}>
            {doc.nombreApellido}
          </option>
        ))}
      </select>

      <label className="block mb-1">Selecciona una fecha:</label>
      <input type="date" className="border p-1 mb-2" value={fecha} onChange={manejarFecha} />

      <div className="grid grid-cols-3 gap-2 mt-2">
        {turnos.map(hora => (
          <button
            key={hora}
            className="bg-green-500 text-white py-1 rounded"
            onClick={() => reservar(hora)}
          >
            {hora}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TurnoSelector;