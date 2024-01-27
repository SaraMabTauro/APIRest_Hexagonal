// infraestructure/controllers/FindAllController.ts

import { Request, Response } from 'express';
import { findAllTarea } from '../../aplicacion/findAllTarea'; // Corregida la ruta

export const findAllController = async (req: Request, res: Response) => {
    try {
        const tareas = findAllTarea();
        res.status(200).json({ tareas });
    } catch (error) {
        console.error('Error al obtener todas las tareas:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
