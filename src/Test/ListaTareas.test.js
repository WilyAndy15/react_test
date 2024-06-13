import React from 'react';
import { render, screen } from '@testing-library/react';
import ListaTareas from '../Components/ListaTareas.jsx';

describe('ListaTareas component', () => {
  const Tareas = [
    { id: 1, nombre: 'Tarea 1', descripcion: 'COMER' },
    { id: 2, nombre: 'Tarea 2', descripcion: 'JUGAR' },
  ];

  test('Tabla renderizada correctamente segun la lista de tareas', () => {
    render(<ListaTareas tareas={Tareas} completarTarea={() => {}} eliminarTarea={() => {}} />);

    expect(screen.getByText(/LISTA DE TAREAS/i)).toBeInTheDocument();

    // Verificar que se renderiza el numero correcto de filas
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(Tareas.length+1);
   // Verificar que los datos de cada tarea sean correctos
    Tareas.forEach((tarea) => {
      expect(screen.getByText(tarea.nombre)).toBeInTheDocument();
      expect(screen.getByText(tarea.descripcion)).toBeInTheDocument();
    });
  });
});
