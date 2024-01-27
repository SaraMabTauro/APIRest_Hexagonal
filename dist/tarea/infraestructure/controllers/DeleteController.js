"use strict";
// infraestructure/controllers/DeleteController.ts
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
exports.deleteController = void 0;
const deleteTarea_1 = require("../../aplicacion/deleteTarea");
const deleteController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idTarea = req.params.id;
        const deleted = yield (0, deleteTarea_1.deleteTarea)(idTarea);
        if (deleted) {
            res.status(200).json({ mensaje: 'Tarea eliminada correctamente' });
        }
        else {
            res.status(404).json({ error: 'La tarea no fue encontrada' });
        }
    }
    catch (error) {
        console.error('Error al eliminar la tarea:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});
exports.deleteController = deleteController;
