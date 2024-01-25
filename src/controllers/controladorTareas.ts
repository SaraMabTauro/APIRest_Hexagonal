import { Request, Response, Router } from 'express';
import { ServicioTareas } from '../services/servicioTareas';

class ControladorTareas {
    private servicioTareas: ServicioTareas;
    private router: Router;

    constructor(servicioTareas: ServicioTareas) {
        this.servicioTareas = servicioTareas;
        this.router = Router();
        this.inicializarRutas();
    }

    private inicializarRutas(): void {
        this.router.get('/tareas', this.obtenerTodasTareas.bind(this));
        this.router.post('/tareas', this.agregarTarea.bind(this));
    }

    private obtenerTodasTareas(req: Request, res: Response): void {
        const tareas = this.servicioTareas.obtenerTodasTareas();
        res.json({ tareas });
    }

    private agregarTarea(req: Request, res: Response): void {
        const nuevaTarea = req.body;
        console.log(req.body)
        console.log(nuevaTarea);
        this.servicioTareas.agregarTarea(nuevaTarea);
        res.status(201).json({ mensaje: 'Tarea Agregada Correctamnete'})
    }

    public obtenerRouter(): Router {
        return this.router;
    }
}

export { ControladorTareas };