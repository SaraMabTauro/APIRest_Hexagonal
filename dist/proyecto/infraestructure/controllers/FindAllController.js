"use strict";
// infraestructure/controllers/FindAllController.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllController = void 0;
const proyectoRepositoryDatabase_1 = require("../../proyectoRepositoryDatabase"); // Corregida la ruta
const databaseClient_1 = require("../../../config/databaseClient");
const databaseClient = new databaseClient_1.DatabaseClient(); // Crear una instancia de DatabaseClient
const proyectoRepository = new proyectoRepositoryDatabase_1.ProyectoRepositoryDatabase(databaseClient); // Pasar databaseClient al constructor
const findAllController = (req, res) => {
    try {
        const proyectos = proyectoRepository.obtenerTodosProyectos();
        res.status(200).json({ proyectos });
    }
    catch (error) {
        console.error('Error al obtener los proyectos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
exports.findAllController = findAllController;
