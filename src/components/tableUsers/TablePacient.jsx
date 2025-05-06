import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const TablePaciente = ({ obtenerTodosLosPacientes }) => {

  const handleClickDeletePacient = (idPaciente) => {
    Swal.fire({
      title: "¿Estás seguro de eliminarlo?",
      text: "¡Si lo borras, la información se perderá!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, estoy seguro",
      cancelButtonText: "¡No!"
    }).then((result) => {
      if (result.isConfirmed) {
        const pacientesLs = JSON.parse(localStorage.getItem("pacientes")) || [];
        const pacienteIndex = pacientesLs.findIndex((paciente) => paciente.id === Number(idPaciente));

        if (pacienteIndex !== -1) {
          pacientesLs.splice(pacienteIndex, 1);
          localStorage.setItem("pacientes", JSON.stringify(pacientesLs))
          Swal.fire({
            title: "¡Paciente eliminado exitosamente!",
            icon: "success"
          });
          obtenerTodosLosPacientes();
        }
      }
    });
  };

  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    const Pacientes = localStorage.getItem('pacientes');
    if (Pacientes) {
      setPacientes(JSON.parse(Pacientes));
    }
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre y Apellido</th>
          <th>Email</th>
          <th>Turnos</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {pacientes.length > 0 ? (
          pacientes.map((paciente, I) => (
            <tr key={I}>
              <td>{paciente.id}</td>
              <td>{paciente.nombreApellido}</td>
              <td>{paciente.email}</td>
              <td>{paciente.turnos}</td>
              <td>
                <Link to={`/admin/createEditPacient?${paciente.id}`} className='btn btn-warning mx-3 w-25'>Editar</Link>
                <button className='btn btn-danger w-25' 
                onClick={() => handleClickDeletePacient(paciente.id)}>Eliminar</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">No hay pacientes registrados.</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default TablePaciente