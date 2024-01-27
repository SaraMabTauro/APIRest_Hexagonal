"use strict";
// infraestructure/controllers/FindAllController.ts
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
exports.findAllController = void 0;
const findAllTarea_1 = require("../../aplicacion/findAllTarea");
const findAllController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tareas = yield (0, findAllTarea_1.findAllTarea)();
        res.status(200).json({ tareas });
    }
    catch (error) {
        console.error('Error al obtener todas las tareas:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});
exports.findAllController = findAllController;
