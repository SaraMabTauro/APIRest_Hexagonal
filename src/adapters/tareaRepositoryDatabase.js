"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TareaRepositoryDatabase = void 0;
class TareaRepositoryDatabase {
    constructor(databaseClient) {
        this.tareas = [];
        this.databaseClient = databaseClient;
        this.databaseClient.connect(); // Establecer conexión al iniciar la aplicación
    }
    agregarTarea(tarea) {
        this.tareas.push(tarea);
    }
    obtenerTodasTareas() {
        return this.tareas;
    }
}
exports.TareaRepositoryDatabase = TareaRepositoryDatabase;
