// src/proyecto/Aplicacion/createProyecto.ts

import { ProyectoRepositoryDatabase } from '../proyectoRepositoryDatabase'; // Corregida la ruta
import { Proyecto } from '../../proyecto/domain/proyecto'; // Corregida la ruta
import { DatabaseClient } from '../../config/databaseClient';

const databaseClient = new DatabaseClient(); // Crear una instancia de DatabaseClient
const proyectoRepository = new ProyectoRepositoryDatabase(databaseClient); // Pasar databaseClient al constructor


export const createProyecto = (nombre: string, descripcion: string, fechaInicio: Date, fechaFin: Date, estado: string): boolean => {
    try {
        const nuevoProyecto = new Proyecto('', nombre, fechaInicio, estado, descripcion, fechaFin);
        proyectoRepository.agregarProyecto(nuevoProyecto);
        return true;
    } catch (error) {
        console.error('Error al crear el proyecto:', error);
        return false;
    }
};
