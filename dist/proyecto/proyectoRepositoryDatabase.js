"use strict";
//src/proyecto/proyectoRepositoryDatabase
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoRepositoryDatabase = void 0;
class ProyectoRepositoryDatabase {
    constructor(databaseClient) {
        this.proyectos = [];
        this.databaseClient = databaseClient;
        this.databaseClient.connect();
    }
    agregarProyecto(proyecto) {
        this.proyectos.push(proyecto);
        return true;
    }
    obtenerTodosProyectos() {
        return this.proyectos;
    }
}
exports.ProyectoRepositoryDatabase = ProyectoRepositoryDatabase;
