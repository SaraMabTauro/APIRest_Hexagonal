"use strict";
// aplicacion/deleteTarea.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTarea = void 0;
const tareaRepositoryDatabase_1 = require("../tareaRepositoryDatabase");
const databaseClient_1 = require("../../config/databaseClient");
const databaseClient = new databaseClient_1.DatabaseClient(); // Crear una instancia de DatabaseClient
const tareaRepository = new tareaRepositoryDatabase_1.TareaRepositoryDatabase(databaseClient); // Pasar databaseClient al constructor
const deleteTarea = (idTarea) => {
    try {
        const deleted = tareaRepository.eliminarTareas(idTarea);
        return deleted;
    }
    catch (error) {
        console.error('Error al eliminar la tarea:', error);
        return false;
    }
};
exports.deleteTarea = deleteTarea;
