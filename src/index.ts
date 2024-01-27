import express from 'express';
import helmet from 'helmet';
import { DatabaseClient } from './config/databaseClient';
import { proyectoRouter } from './proyecto/infraestructure/proyectoRouter';
import { tareaRouter } from './tarea/infraestructure/tareaRouter';

const app = express();
app.use(helmet.hidePoweredBy());
app.use(express.json());
const puerto = 4000;

const databaseClient = new DatabaseClient(); 
databaseClient.connect(); 

app.use('/api', tareaRouter);
app.use('/api', proyectoRouter);

app.listen(puerto, () => {
    console.log('Servidor escuchando en el puerto:', puerto);
})


