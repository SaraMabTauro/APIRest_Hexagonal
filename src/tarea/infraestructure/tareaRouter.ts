// infraestructure/proyectoRouter.ts

import express from 'express';
import { createController } from './controllers/CreateController';
import { findAllController } from './controllers/FindAllController';
import { deleteController } from '../../tarea/infraestructure/controllers/DeleteController'

const router = express.Router();

router.post('/tareas', createController);
router.get('/tareas', findAllController);
router.delete('/tareas/:id', deleteController)

export { router as tareaRouter };
