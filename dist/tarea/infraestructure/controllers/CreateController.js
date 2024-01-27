"use strict";
// infraestructure/controllers/CreateController.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createController = void 0;
const createTarea_1 = require("../../aplicacion/createTarea"); // Corregida la ruta
const createController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, titulo, descripcion, fecha_creacion, fecha_limite, estado } = req.body;
        const created = (0, createTarea_1.createTarea)(id, titulo, fecha_creacion, estado, descripcion, fecha_limite);
        if (created) {
            res.status(201).json({ mensaje: 'Tarea creada correctamente' });
        }
        else {
            res.status(500).json({ error: 'Error al crear la tarea' });
        }
    }
    catch (error) {
        console.error('Error al crear la tarea:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});
exports.createController = createController;
