import { Table, TableContainer, TableHead, TableRow, TableBody, TableCell} from '@mui/material';
import React from 'react'
import Tarea from './Tarea';

// Componente para generar una Tabla con el listado de tareas existentes
const ListaTareas = ({tareas, completarTarea, eliminarTarea}) => {

  // Vista para la tabla, se llama al componente hijo Tarea para dibujar cada una en una fila independiente.
  return (
    <>
    <TableContainer>
    <h1>LISTA DE TAREAS</h1>
      <Table sx={{ minWidth: 500 }}>
        <TableHead>
          <TableRow>
            <TableCell align="center">NUMERO DE TAREA</TableCell>
            <TableCell align="center">NOMBRE</TableCell>
            <TableCell align="center">DESCRIPCION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tareas.map((row) => (
            <Tarea key={row.id} tarea={row} completarTarea={completarTarea} eliminarTarea={eliminarTarea}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default ListaTareas;