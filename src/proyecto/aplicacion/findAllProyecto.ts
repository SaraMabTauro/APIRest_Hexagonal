// src/proyecto/Aplicacion/findAllProyecto.ts

import { ProyectoRepositoryDatabase } from '../proyectoRepositoryDatabase'; // Corregida la ruta
import { Proyecto } from '../../proyecto/domain/proyecto'; // Corregida la ruta
import { DatabaseClient } from '../../config/databaseClient';

const databaseClient = new DatabaseClient(); // Crear una instancia de DatabaseClient
const proyectoRepository = new ProyectoRepositoryDatabase(databaseClient); // Pasar databaseClient al constructor

export const findAllProyecto = (): Proyecto[] => {
    try {
        return proyectoRepository.obtenerTodosProyectos();
    } catch (error) {
        console.error('Error al obtener todos los proyectos:', error);
        return [];
    }
};
