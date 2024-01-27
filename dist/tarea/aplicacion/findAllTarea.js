"use strict";
// aplicacion/findAllTarea.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllTarea = void 0;
const tareaRepositoryDatabase_1 = require("../tareaRepositoryDatabase");
const databaseClient_1 = require("../../config/databaseClient");
const databaseClient = new databaseClient_1.DatabaseClient(); // Crear una instancia de DatabaseClient
const tareaRepository = new tareaRepositoryDatabase_1.TareaRepositoryDatabase(databaseClient); // Pasar databaseClient al constructor
const findAllTarea = () => {
    try {
        const tareas = tareaRepository.obtenerTodasTareas();
        return tareas;
    }
    catch (error) {
        console.error('Error al obtener todas las tareas:', error);
        return [];
    }
};
exports.findAllTarea = findAllTarea;
