"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const databaseClient_1 = require("./config/databaseClient");
const proyectoRouter_1 = require("./proyecto/infraestructure/proyectoRouter");
const tareaRouter_1 = require("./tarea/infraestructure/tareaRouter");
const app = (0, express_1.default)();
app.use(helmet_1.default.hidePoweredBy());
app.use(express_1.default.json());
const puerto = 4000;
const databaseClient = new databaseClient_1.DatabaseClient();
databaseClient.connect();
app.use('/api', tareaRouter_1.tareaRouter);
app.use('/api', proyectoRouter_1.proyectoRouter);
app.listen(puerto, () => {
    console.log('Servidor escuchando en el puerto:', puerto);
});
