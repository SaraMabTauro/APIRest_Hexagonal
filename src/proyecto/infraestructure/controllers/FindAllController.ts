// infraestructure/controllers/FindAllController.ts

import { Request, Response } from 'express';
import { ProyectoRepositoryDatabase } from '../../proyectoRepositoryDatabase'; // Corregida la ruta
import { DatabaseClient } from '../../../config/databaseClient';

const databaseClient = new DatabaseClient(); // Crear una instancia de DatabaseClient
const proyectoRepository = new ProyectoRepositoryDatabase(databaseClient); // Pasar databaseClient al constructor


export const findAllController = (req: Request, res: Response) => {
    try {
        const proyectos = proyectoRepository.obtenerTodosProyectos();
        res.status(200).json({ proyectos });
    } catch (error) {
        console.error('Error al obtener los proyectos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

