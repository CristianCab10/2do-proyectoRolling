import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const TableDoctor = ({ obtenerTodosLosDoctores }) => {

  const handleClickDeleteDoctor = (idDoctor) => {
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
        const doctoresLs = JSON.parse(localStorage.getItem("doctores")) || []
        const doctorIndex = doctoresLs.findIndex((doctor) => doctor.id === Number(idDoctor))

        if (doctorIndex !== -1) {
          doctoresLs.splice(doctorIndex, 1);
          localStorage.setItem("doctores", JSON.stringify(doctoresLs))
          Swal.fire({
            title: "¡Doctor eliminado exitosamente!",
            icon: "success"
          });
          obtenerTodosLosDoctores()
        }
      }
    });
  };

  const [doctores, setDoctores] = useState([])

  useEffect(() => {
    const Doctores = localStorage.getItem('doctores')
    if (Doctores) {
      setDoctores(JSON.parse(Doctores));
    }
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre y Apellido</th>
          <th>Email</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {doctores.length > 0 ? (
          doctores.map((doctor, I) => (
            <tr key={I}>
              <td>{doctor.id}</td>
              <td>{doctor.nombreApellido}</td>
              <td>{doctor.email}</td>
              <td>
                <Link to={`/admin/createEditDoctor?${doctor.id}`} className='btn btn-warning mx-3 w-25'>Editar</Link>
                <button className='btn btn-danger w-25' onClick={() => handleClickDeleteDoctor(doctor.id)}>Eliminar</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">No hay doctores registrados.</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default TableDoctor