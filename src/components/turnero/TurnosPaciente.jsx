import React, { useEffect, useState } from 'react';

const TurnosPaciente = ({ usuario }) => {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    const t = JSON.parse(localStorage.getItem('turnos')) || [];
    const misTurnos = t.filter(turno => turno.paciente === usuario.nombre);
    setTurnos(misTurnos);
  }, [usuario]);

  return (
    <div className="mt-4">
      <h2 className="font-semibold">Mis Turnos</h2>
      {turnos.length === 0 ? (
        <p>No tenés turnos registrados.</p>
      ) : (
        <table className="w-full border mt-2">
          <thead>
            <tr>
              <th className="border p-1">Fecha</th>
              <th className="border p-1">Hora</th>
              <th className="border p-1">Médico</th>
              <th className="border p-1">Estado</th>
            </tr>
          </thead>
          <tbody>
            {turnos.map(t => (
              <tr key={t.id}>
                <td className="border p-1">{t.fecha}</td>
                <td className="border p-1">{t.hora}</td>
                <td className="border p-1">{t.medico}</td>
                <td className="border p-1">{t.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TurnosPaciente;