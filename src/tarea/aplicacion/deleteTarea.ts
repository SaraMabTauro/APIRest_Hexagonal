// aplicacion/deleteTarea.ts

import { TareaRepositoryDatabase } from "../tareaRepositoryDatabase";
import { DatabaseClient } from '../../config/databaseClient';

const databaseClient = new DatabaseClient();
const tareaRepository = new TareaRepositoryDatabase(databaseClient); 

export const deleteTarea = (idTarea: string): boolean => {
    try {
        const deleted = tareaRepository.eliminarTareas(idTarea);
        return deleted;
    } catch (error) {
        console.error('Error al eliminar la tarea:', error);
        return false;
    }
};
