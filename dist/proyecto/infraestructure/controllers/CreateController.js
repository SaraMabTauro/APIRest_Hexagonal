"use strict";
// infraestructure/controllers/CreateController.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.createController = void 0;
const proyecto_1 = require("../../domain/proyecto"); // Corregida la ruta
const proyectoRepositoryDatabase_1 = require("../../proyectoRepositoryDatabase"); // Corregida la ruta
const databaseClient_1 = require("../../../config/databaseClient");
const databaseClient = new databaseClient_1.DatabaseClient(); // Crear una instancia de DatabaseClient
const proyectoRepository = new proyectoRepositoryDatabase_1.ProyectoRepositoryDatabase(databaseClient); // Pasar databaseClient al constructor
const createController = (req, res) => {
    try {
        const { nombre, descripcion, fechaInicio, fechaFin, estado } = req.body;
        const nuevoProyecto = new proyecto_1.Proyecto('', nombre, fechaInicio, estado, descripcion, fechaFin);
        proyectoRepository.agregarProyecto(nuevoProyecto);
        res.status(201).json({ mensaje: 'Proyecto creado correctamente' });
    }
    catch (error) {
        console.error('Error al crear el proyecto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
exports.createController = createController;
