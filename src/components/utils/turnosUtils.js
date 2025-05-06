export const generarTurnosDia = (fecha) => {
  const horas = [];
  const inicio = new Date(`${fecha}T08:30:00`);
  for (let i = 0; i < 19; i++) {
    const h = new Date(inicio.getTime() + i * 30 * 60000);
    horas.push(h.toTimeString().substring(0, 5));
  }

  const ocupados = JSON.parse(localStorage.getItem('turnos')) || [];
  const ocupadosHoy = ocupados.filter(t => t.fecha === fecha).map(t => t.hora);

  return horas.filter(h => !ocupadosHoy.includes(h));
};

export const guardarTurnoLocal = (turno) => {
  const turnos = JSON.parse(localStorage.getItem('turnos')) || [];
  turnos.push(turno);
  localStorage.setItem('turnos', JSON.stringify(turnos));
};