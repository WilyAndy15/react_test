import React, { useEffect, useState } from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import ListaTareas from './ListaTareas';
import AgregarTarea from './AgregarTarea';

// Clase principal 
const Main = () => {
  // Creacion del listado de tareas, buscando en el Store local del navegador
  const [tareas, setTareas] = useState(() => {
    const listaguardada = localStorage.getItem("tareas");
    const lista = JSON.parse(listaguardada);
    return lista || {};
  });


  // Agregar nuevas tareas o cambios al localStorage
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  // Funciones de agregar, eliminar y completar tareas
  const agregarTarea = (tarea) => {
    var ultimoId = 0;
    if(tareas.length > 0){
     ultimoId = tareas[tareas.length -1].id;
    }
    setTareas([...tareas, { id: ultimoId + 1, nombre: tarea.nombre, descripcion: tarea.descripcion, completado: false }]);
  };

  const eliminarTarea = (id) => {
    const nuevaLista = tareas.filter(tarea => tarea.id !== id);
    setTareas(nuevaLista);
  };

  const completarTarea = (id) => {
    const nuevaLista = tareas.map(tarea => {
      if (tarea.id === id) {
        return { ...tarea, completado: !tarea.completado };
      }
      return tarea;
    });
    setTareas(nuevaLista);
  };

  // Interfaz main que llama a componentes hijos (Agregar Tarea, ListaTareas) se pasan PROPS (tareas, agregarTarea, completarTarea, eliminarTarea)
  return (
    <>
      <AppBar style={{ alignItems: 'center' }}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            PRUEBA REACTJS
          </Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ padding: '3%'}}>
      <AgregarTarea agregarTarea={agregarTarea}/>
      { tareas.length > 0 && (<ListaTareas tareas={tareas} completarTarea={completarTarea} eliminarTarea={eliminarTarea} />)}
      </Container>
    </>
  )
}

export default Main