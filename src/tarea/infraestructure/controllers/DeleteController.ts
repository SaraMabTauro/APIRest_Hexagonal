// infraestructure/controllers/DeleteController.ts

import { Request, Response } from 'express';
import { deleteTarea } from '../../aplicacion/deleteTarea';

export const deleteController = async (req: Request, res: Response) => {
    try {
        const idTarea = req.params.id;
        const deleted = await deleteTarea(idTarea);
        if (deleted) {
            res.status(200).json({ mensaje: 'Tarea eliminada correctamente' });
        } else {
            res.status(404).json({ error: 'La tarea no fue encontrada' });
        }
    } catch (error) {
        console.error('Error al eliminar la tarea:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

