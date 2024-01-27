// infraestructure/controllers/CreateController.ts

import { Request, Response } from 'express';
import { Proyecto } from '../../domain/proyecto'; // Corregida la ruta
import { ProyectoRepositoryDatabase } from '../../proyectoRepositoryDatabase'; // Corregida la ruta
import { DatabaseClient } from '../../../config/databaseClient';

const databaseClient = new DatabaseClient(); // Crear una instancia de DatabaseClient
const proyectoRepository = new ProyectoRepositoryDatabase(databaseClient); // Pasar databaseClient al constructor

export const createController = (req: Request, res: Response) => {
    try {
        const { nombre, descripcion, fechaInicio, fechaFin, estado } = req.body;
        const nuevoProyecto = new Proyecto('', nombre, fechaInicio, estado, descripcion, fechaFin);
        proyectoRepository.agregarProyecto(nuevoProyecto);
        res.status(201).json({ mensaje: 'Proyecto creado correctamente' });
    } catch (error) {
        console.error('Error al crear el proyecto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
