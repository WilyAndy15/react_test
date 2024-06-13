import { Button, TableCell, TableRow } from '@mui/material';
import React from 'react'

// Componente Tarea que recibe las funciones para poder agregar el estado de completado y tambipen para eliminar tareas.
const Tarea = ({tarea, completarTarea, eliminarTarea}) => {

  // Vista Tarea de forma independiente, se dibujará en una Fila con sus respectivos campos.
  return (
    <>
      <TableRow key={tarea.id} style={{backgroundColor : tarea.completado ? 'lightgreen' : 'lightcoral'}}>
              <TableCell align="center">{tarea.id}</TableCell>
              <TableCell align="center">{tarea.nombre}</TableCell>
              <TableCell align="center">{tarea.descripcion}</TableCell>
              <TableCell align="center">  
                <Button variant="contained" onClick={() => completarTarea(tarea.id)}>{tarea.completado ? 'REGRESAR' : 'COMPLETAR' }</Button>
              </TableCell>
              <TableCell align="center">
                <Button variant="contained" onClick={() => eliminarTarea(tarea.id)}>Eliminar Tarea</Button>
              </TableCell>
      </TableRow>
    </>
  )
}


export default Tarea;