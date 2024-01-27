"use strict";
// src/proyecto/Aplicacion/findAllProyecto.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllProyecto = void 0;
const proyectoRepositoryDatabase_1 = require("../proyectoRepositoryDatabase"); // Corregida la ruta
const databaseClient_1 = require("../../config/databaseClient");
const databaseClient = new databaseClient_1.DatabaseClient(); // Crear una instancia de DatabaseClient
const proyectoRepository = new proyectoRepositoryDatabase_1.ProyectoRepositoryDatabase(databaseClient); // Pasar databaseClient al constructor
const findAllProyecto = () => {
    try {
        return proyectoRepository.obtenerTodosProyectos();
    }
    catch (error) {
        console.error('Error al obtener todos los proyectos:', error);
        return [];
    }
};
exports.findAllProyecto = findAllProyecto;
