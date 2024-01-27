"use strict";
// infraestructure/proyectoRouter.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tareaRouter = void 0;
const express_1 = __importDefault(require("express"));
const CreateController_1 = require("./controllers/CreateController");
const FindAllController_1 = require("./controllers/FindAllController");
const DeleteController_1 = require("../../tarea/infraestructure/controllers/DeleteController");
const router = express_1.default.Router();
exports.tareaRouter = router;
router.post('/tareas', CreateController_1.createController);
router.get('/tareas', FindAllController_1.findAllController);
router.delete('/tareas/:id', DeleteController_1.deleteController);
