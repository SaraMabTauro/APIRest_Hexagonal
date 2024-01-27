"use strict";
// aplicacion/createTarea.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTarea = void 0;
const tareaRepositoryDatabase_1 = require("../tareaRepositoryDatabase");
const tarea_1 = require("../domain/tarea");
const databaseClient_1 = require("../../config/databaseClient");
const databaseClient = new databaseClient_1.DatabaseClient(); // Crear una instancia de DatabaseClient
const tareaRepository = new tareaRepositoryDatabase_1.TareaRepositoryDatabase(databaseClient); // Pasar databaseClient al constructor
const createTarea = (id, titulo, fecha_creacion, estado, descripcion, fecha_limite) => {
    try {
        const nuevaTarea = new tarea_1.Tarea(id, titulo, fecha_creacion, estado, descripcion, fecha_limite);
        tareaRepository.agregarTarea(nuevaTarea);
        return true;
    }
    catch (error) {
        console.error('Error al crear el proyecto:', error);
        return false;
    }
};
exports.createTarea = createTarea;
