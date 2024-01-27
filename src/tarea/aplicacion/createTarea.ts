// aplicacion/createTarea.ts

import { TareaRepositoryDatabase } from "../tareaRepositoryDatabase";
import { Tarea } from "../domain/tarea";
import { DatabaseClient } from '../../config/databaseClient';

const databaseClient = new DatabaseClient();
const tareaRepository = new TareaRepositoryDatabase(databaseClient); 

export const createTarea = (id: string, titulo: string, fecha_creacion: Date, estado: string, descripcion?: string, fecha_limite?: Date): boolean => {
    try {
        const nuevaTarea = new Tarea(id, titulo, fecha_creacion, estado, descripcion, fecha_limite);
        tareaRepository.agregarTarea(nuevaTarea);
        return true;
    } catch (error) {
        console.error('Error al crear el proyecto:', error);
        return false;
    }
};