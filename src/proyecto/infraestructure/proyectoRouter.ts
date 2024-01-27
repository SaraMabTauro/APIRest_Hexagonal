// infraestructure/proyectoRouter.ts

import express from 'express';
import { createController } from './controllers/CreateController';
import { findAllController } from './controllers/FindAllController';

const router = express.Router();

// Definir rutas para crear y obtener proyectos
router.post('/proyectos', createController);
router.get('/proyectos', findAllController);

export { router as proyectoRouter };
