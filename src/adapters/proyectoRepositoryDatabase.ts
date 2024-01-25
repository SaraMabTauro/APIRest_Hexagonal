import { Proyecto } from "../domain/proyecto";
import { ProyectoRepository } from "../ports/proyectoRepository";
import { DatabaseClient } from "../config/databaseClient";

class ProyectoRepositoryDatabase implements ProyectoRepository {
    private proyectos: Proyecto[] = [];
    private databaseClient: DatabaseClient;

    constructor(databaseClient: DatabaseClient){
        this.databaseClient = databaseClient;
        this.databaseClient.connect();
    }

    agregarProyecto(proyecto: Proyecto): boolean {
        this.proyectos.push(proyecto);
        return true;
    }

    obtenerTodosProyectos(): Proyecto[] {
        return this.proyectos;
    }
}

export { ProyectoRepositoryDatabase };
