import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const TableAdmin = ({obtenerTodosLosAdmins}) => {
  const handleClickDeleteAdmin = (idAdmin) => {
    Swal.fire({
      title: "Estas seguro de eliminarlo?",
      text: "Si lo borras la informacion se perderá!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, estoy seguro",
      cancelButtonText: "No!"
    }).then((result) => {
      if (result.isConfirmed) {
        const adminsLs = JSON.parse(localStorage.getItem("admins")) || []
        const adminIndex = adminsLs.findIndex((admin)=> admin.id === Number(idAdmin))

        adminsLs.splice(adminIndex, 1)
        localStorage.setItem("admins", JSON.stringify("adminsLs"))
        Swal.fire({
          title: "Admin eliminado exitosamente!",
          icon: "success"
        });
        obtenerTodosLosAdmins()
      }
    });
  }
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const Admins = localStorage.getItem('admins');
    if (Admins) {
      setAdmins(JSON.parse(Admins));
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
        {admins.length > 0 ? (
          admins.map((admin, I) => (
            <tr key={I}>
              <td>{admin.id}</td>
              <td>{admin.nombreApellido}</td>
              <td>{admin.email}</td>
              <td>
                <Link to={`createEditAdmin?${admin.id}`} className='btn btn-warning mx-3 w-25' >Editar</Link>
                <Link className='btn btn-danger w-25' onClick={() => handleClickDeleteAdmin(admin.id)}>Eliminar</Link>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="text-center">No hay administradores registrados.</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default TableAdmin