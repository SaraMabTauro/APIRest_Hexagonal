import express from 'express';
import { ControladorTareas } from './controllers/controladorTareas';
import { ControladorProyectos } from './controllers/controladorProyecto'; // Importa el controlador de proyectos
import { ServicioTareas } from './services/servicioTareas';
import { ServicioProyectos } from './services/servicioProyecto'; // Importa el servicio de proyectos
import { TareaRepositoryDatabase } from './adapters/tareaRepositoryDatabase';
import { ProyectoRepositoryDatabase } from './adapters/proyectoRepositoryDatabase'; // Supongamos que tienes un adaptador similar para proyectos
import { ServicioTareasExternasAdapter } from './adapters/servicioTareasExternasAdapter';
import { ServicioProyectoExternasAdapter } from './adapters/servicioProyectoExternasAdapter'; // Importa el adaptador de servicios externos para proyectos
import { DatabaseClient } from './config/databaseClient';

const app = express();
app.use(express.json());
const puerto = 4000;

const databaseClient = new DatabaseClient(); 
databaseClient.connect(); 

const tareaRepository = new TareaRepositoryDatabase(databaseClient);
const proyectoRepository = new ProyectoRepositoryDatabase(databaseClient); 
const servicioTareasExternas = new ServicioTareasExternasAdapter();
const servicioProyectoExternas = new ServicioProyectoExternasAdapter(); 

const servicioTareas = new ServicioTareas (tareaRepository, servicioTareasExternas);
const servicioProyectos = new ServicioProyectos (proyectoRepository, servicioProyectoExternas);

const controladorTareas = new ControladorTareas(servicioTareas);
const controladorProyectos = new ControladorProyectos(servicioProyectos);

app.use('/api', controladorTareas.obtenerRouter());
app.use('/api', controladorProyectos.obtenerRouter()); 
app.listen(puerto, () => {
    console.log('Servidor escuchando en el puerto:', puerto);
})
