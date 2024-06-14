import { Table, TableHead, TableRow, TableBody, TableCell, Typography, TableContainer} from '@mui/material';
import React from 'react'
import Tarea from './Tarea';

// Componente para generar una Tabla con el listado de tareas existentes
const ListaTareas = ({tareas, completarTarea, eliminarTarea}) => {

  // Vista para la tabla, se llama al componente hijo Tarea para dibujar cada una en una fila independiente.
  return (
    <>
    <TableContainer style={{borderRadius: '15px'}}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell colSpan={5} align="center">
              <Typography variant="h5">
              LISTA DE TAREAS
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">NUMERO DE TAREA</TableCell>
            <TableCell align="center">NOMBRE</TableCell>
            <TableCell align="center">DESCRIPCION</TableCell>
            <TableCell align="center">ESTADO</TableCell>
            <TableCell align="center">ELIMINAR</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tareas.map((row) => (
            <Tarea key={row.id} tarea={row} completarTarea={completarTarea} eliminarTarea={eliminarTarea} />
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </>
  )
}

export default ListaTareas;