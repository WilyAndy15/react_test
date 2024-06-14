import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AgregarTarea from '../Components/AgregarTarea.jsx';

describe('AgregarTarea component', () => {
  test('should add a new task when form is submitted', () => {
    // Mock de la función agregarTarea - Simula la funcion de AgregarTarea
    const agregarTarea = jest.fn();

    render(<AgregarTarea agregarTarea={agregarTarea} />);

    // Simula entrada de una nueva tarea
    const nombre = screen.getByLabelText('Nombre');
    const descripcion = screen.getByLabelText('Descripcion');
    const botonAgregar = screen.getByRole('button', { name: /Agregar Tarea/i });

    // Simula el ingreso de valores y el clic al boton
    fireEvent.change(nombre, { target: { value: 'Nueva Tarea' } });
    fireEvent.change(descripcion, { target: { value: 'Descripcion' } });
    fireEvent.click(botonAgregar);

    // Verifica que la funcion agregarTarea se llame una vez con los valores correctos
    expect(agregarTarea).toHaveBeenCalledTimes(1);
    expect(agregarTarea).toHaveBeenCalledWith({
      nombre: 'Nueva Tarea',
      descripcion: 'Descripcion',
    });

    // Verifica que los campos de nombre y descripcion se seteen o vacien despues de agregar la tarea
    expect(nombre.value).toBe('');
    expect(descripcion.value).toBe('');
  });
});
