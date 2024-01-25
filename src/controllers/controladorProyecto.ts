import { Request, Response, Router } from 'express';
import { ServicioProyectos } from '../services/servicioProyecto';
import { Proyecto } from '../domain/proyecto';

class ControladorProyectos {
    private servicioProyectos: ServicioProyectos;
    private router: Router;

    constructor(servicioProyectos: ServicioProyectos) {
        this.servicioProyectos = servicioProyectos;
        this.router = Router();
        this.inicializarRutas();
    }

    private inicializarRutas(): void {
        this.router.get('/proyectos', this.obtenerTodosProyectos.bind(this));
        this.router.post('/proyectos', this.agregarProyecto.bind(this));
    }

    private obtenerTodosProyectos(req: Request, res: Response): void {
        const proyectos = this.servicioProyectos.obtenerTodosProyectos();
        res.json({ proyectos });
    }

    private agregarProyecto(req: Request, res: Response): void {
        try {
            const { nombre, descripcion, fechaInicio, fechaFin, estado } = req.body;
            const nuevoProyecto = new Proyecto('', nombre, fechaInicio, estado, descripcion, fechaFin);
            this.servicioProyectos.agregarProyecto(nuevoProyecto);
            res.status(201).json({ mensaje: 'Proyecto agregado correctamente' });
        } catch (error) {
            console.error('Error al agregar el proyecto:', error);
            res.status(400).json({ error: 'No se pudo agregar el proyecto' });
        }
    }

    public obtenerRouter(): Router {
        return this.router;
    }
}

export { ControladorProyectos };

