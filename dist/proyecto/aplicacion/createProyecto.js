"use strict";
// src/proyecto/Aplicacion/createProyecto.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProyecto = void 0;
const proyectoRepositoryDatabase_1 = require("../proyectoRepositoryDatabase"); // Corregida la ruta
const proyecto_1 = require("../../proyecto/domain/proyecto"); // Corregida la ruta
const databaseClient_1 = require("../../config/databaseClient");
const databaseClient = new databaseClient_1.DatabaseClient(); // Crear una instancia de DatabaseClient
const proyectoRepository = new proyectoRepositoryDatabase_1.ProyectoRepositoryDatabase(databaseClient); // Pasar databaseClient al constructor
const createProyecto = (nombre, descripcion, fechaInicio, fechaFin, estado) => {
    try {
        const nuevoProyecto = new proyecto_1.Proyecto('', nombre, fechaInicio, estado, descripcion, fechaFin);
        proyectoRepository.agregarProyecto(nuevoProyecto);
        return true;
    }
    catch (error) {
        console.error('Error al crear el proyecto:', error);
        return false;
    }
};
exports.createProyecto = createProyecto;
