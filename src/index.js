"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controladorTareas_1 = require("./controllers/controladorTareas");
const servicioTareas_1 = require("./services/servicioTareas");
const tareaRepositoryDatabase_1 = require("./adapters/tareaRepositoryDatabase");
const servicioTareasExternasAdapter_1 = require("./adapters/servicioTareasExternasAdapter");
const databaseClient_1 = require("./adapters/databaseClient");
const app = (0, express_1.default)();
const puerto = 3000;
const databaseClient = new databaseClient_1.DatabaseClient(); // Crea una instancia de DatabaseClient
databaseClient.connect(); // Establecer conexión al iniciar la aplicación
const tareaRepository = new tareaRepositoryDatabase_1.TareaRepositoryDatabase(databaseClient);
const servicioTareasExternas = new servicioTareasExternasAdapter_1.ServicioTareasExternasAdapter();
const servicioTareas = new servicioTareas_1.ServicioTareas(tareaRepository, servicioTareasExternas);
const controladorTareas = new controladorTareas_1.ControladorTareas(servicioTareas);
app.use('/api', controladorTareas.obtenerRouter());
app.listen(puerto, () => {
    console.log('Servidor escuchando en el:',puerto);
});
