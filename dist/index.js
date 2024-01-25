"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controladorTareas_1 = require("./controllers/controladorTareas");
const controladorProyecto_1 = require("./controllers/controladorProyecto"); // Importa el controlador de proyectos
const servicioTareas_1 = require("./services/servicioTareas");
const servicioProyecto_1 = require("./services/servicioProyecto"); // Importa el servicio de proyectos
const tareaRepositoryDatabase_1 = require("./adapters/tareaRepositoryDatabase");
const proyectoRepositoryDatabase_1 = require("./adapters/proyectoRepositoryDatabase"); // Supongamos que tienes un adaptador similar para proyectos
const servicioTareasExternasAdapter_1 = require("./adapters/servicioTareasExternasAdapter");
const servicioProyectoExternasAdapter_1 = require("./adapters/servicioProyectoExternasAdapter"); // Importa el adaptador de servicios externos para proyectos
const databaseClient_1 = require("./config/databaseClient");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const puerto = 4000;
const databaseClient = new databaseClient_1.DatabaseClient();
databaseClient.connect();
const tareaRepository = new tareaRepositoryDatabase_1.TareaRepositoryDatabase(databaseClient);
const proyectoRepository = new proyectoRepositoryDatabase_1.ProyectoRepositoryDatabase(databaseClient);
const servicioTareasExternas = new servicioTareasExternasAdapter_1.ServicioTareasExternasAdapter();
const servicioProyectoExternas = new servicioProyectoExternasAdapter_1.ServicioProyectoExternasAdapter();
const servicioTareas = new servicioTareas_1.ServicioTareas(tareaRepository, servicioTareasExternas);
const servicioProyectos = new servicioProyecto_1.ServicioProyectos(proyectoRepository, servicioProyectoExternas);
const controladorTareas = new controladorTareas_1.ControladorTareas(servicioTareas);
const controladorProyectos = new controladorProyecto_1.ControladorProyectos(servicioProyectos);
app.use('/api', controladorTareas.obtenerRouter());
app.use('/api', controladorProyectos.obtenerRouter());
app.listen(puerto, () => {
    console.log('Servidor escuchando en el puerto:', puerto);
});
