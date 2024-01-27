// aplicacion/findAllTarea.ts

import { TareaRepositoryDatabase } from "../tareaRepositoryDatabase";
import { Tarea } from "../domain/tarea";
import { DatabaseClient } from '../../config/databaseClient';

const databaseClient = new DatabaseClient(); 
const tareaRepository = new TareaRepositoryDatabase(databaseClient); 

export const findAllTarea = (): Tarea[] => {
    try {
        const tareas = tareaRepository.obtenerTodasTareas();
        return tareas;
    } catch (error) {
        console.error('Error al obtener todas las tareas:', error);
        return [];
    }
};
