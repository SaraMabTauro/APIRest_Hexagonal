import { ProyectoRepository } from "../ports/proyectoRepository";
import { ServicioProyectoExternas } from "../ports/servicioProyectoExternas";
import { Proyecto } from "../domain/proyecto";

class ServicioProyectos {
    private proyectoRepository: ProyectoRepository;
    private servicioProyectoExternas : ServicioProyectoExternas;

    constructor(proyectoRepository: ProyectoRepository, servicioProyectoExternas: ServicioProyectoExternas){
        this.proyectoRepository = proyectoRepository;
        this.servicioProyectoExternas = servicioProyectoExternas;
    }

    agregarProyecto(proyecto: Proyecto){
        this.proyectoRepository.agregarProyecto(proyecto);
        this.servicioProyectoExternas.sincronizarConServiciosExterno(proyecto); 
    }

    obtenerTodosProyectos(): Proyecto[] {
        return this.proyectoRepository.obtenerTodosProyectos();
    }

}

export { ServicioProyectos };
