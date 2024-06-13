import { Button, TextField } from '@mui/material';
import React, {useState} from 'react'

const AgregarTarea = ({agregarTarea}) => {
  // Creacion de un objeto TAREA para poder manejar mejor las propiedades y atributos.
  const [tarea, setTarea] = useState({
    nombre: '',
    descripcion :''
  });

  // Funcion para enviar a guardar la tarea y setear en vacio los elementos de Tarea para una nueva inserción
  const handleSubmit = (e) => {
    e.preventDefault();
    agregarTarea(tarea);
    setTarea({ nombre: '', descripcion: '' }); 
  };

  // Vista de formulario
  return (
    <>
      <form onSubmit={handleSubmit}>
      <TextField 
        label="Nombre" 
        name="nombre" 
        value={tarea.nombre} 
        onChange={(e) => setTarea(estadoT => ({ ...estadoT, nombre: e.target.value }))} 
        fullWidth 
      />
      <TextField 
        label="Descripcion" 
        name="descripcion" 
        value={tarea.descripcion} 
        onChange={(e) => setTarea(estadoT => ({ ...estadoT, descripcion: e.target.value }))} 
        fullWidth
        multiline
        rows={2} 
        margin="normal" 
      />
      <Button variant="contained" color="primary" type="submit">
        Agregar Tarea
      </Button>
    </form>
    </>
  )
}


export default AgregarTarea;