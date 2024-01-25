import { Tarea } from "../domain/tarea";
import { TareaRepository } from "../ports/tareaRepository";
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
}

export { TareaRepositoryDatabase };
