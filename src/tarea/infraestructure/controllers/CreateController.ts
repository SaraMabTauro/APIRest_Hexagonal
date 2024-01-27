// infraestructure/controllers/CreateController.ts

import { Request, Response } from 'express';
import { createTarea } from '../../aplicacion/createTarea'; // Corregida la ruta

export const createController = async (req: Request, res: Response) => {
    try {
        const { id, titulo, descripcion, fecha_creacion, fecha_limite, estado } = req.body;
        const created = await createTarea(id, titulo, fecha_creacion, estado, descripcion, fecha_limite);
        if (created) {
            res.status(201).json({ mensaje: 'Tarea creada correctamente' });
        } else {
            res.status(500).json({ error: 'Error al crear la tarea' });
        }
    } catch (error) {
        console.error('Error al crear la tarea:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

