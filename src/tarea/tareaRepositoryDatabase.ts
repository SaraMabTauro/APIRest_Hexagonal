import { Tarea } from "../tarea/domain/tarea";
import { TareaRepository } from "../tarea/domain/tareaRepository";
import { DatabaseClient } from "../config/databaseClient";


class TareaRepositoryDatabase implements TareaRepository {
    private tareas: Tarea[] = [];
    private databaseClient: DatabaseClient;

    constructor(databaseClient: DatabaseClient){
        this.databaseClient = databaseClient;
        this.databaseClient.connect();
    }

    agregarTarea(tarea: Tarea): boolean {
        this.tareas.push(tarea);
        return true;
    }

    obtenerTodasTareas(): Tarea[] {
        return this.tareas;
    }

    eliminarTareas(idTarea: string): boolean {
        const indice = this.tareas.findIndex(tarea => tarea.id === idTarea);
        if (indice !== -1) {
            this.tareas.splice(indice, 1);
            return true; 
        } else {
            return false; 
        }
    }
}

export { TareaRepositoryDatabase };