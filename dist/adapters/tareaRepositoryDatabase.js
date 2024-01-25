"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TareaRepositoryDatabase = void 0;
class TareaRepositoryDatabase {
    constructor(databaseClient) {
        this.tareas = [];
        this.databaseClient = databaseClient;
        this.databaseClient.connect();
    }
    agregarTarea(tarea) {
        this.tareas.push(tarea);
        return true;
    }
    obtenerTodasTareas() {
        return this.tareas;
    }
}
exports.TareaRepositoryDatabase = TareaRepositoryDatabase;
