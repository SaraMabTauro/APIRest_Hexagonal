"use strict";
// infraestructure/proyectoRouter.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.proyectoRouter = void 0;
const express_1 = __importDefault(require("express"));
const CreateController_1 = require("./controllers/CreateController");
const FindAllController_1 = require("./controllers/FindAllController");
const router = express_1.default.Router();
exports.proyectoRouter = router;
// Definir rutas para crear y obtener proyectos
router.post('/proyectos', CreateController_1.createController);
router.get('/proyectos', FindAllController_1.findAllController);
