"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioProyectos = void 0;
class ServicioProyectos {
    constructor(proyectoRepository, servicioProyectoExternas) {
        this.proyectoRepository = proyectoRepository;
        this.servicioProyectoExternas = servicioProyectoExternas;
    }
    agregarProyecto(proyecto) {
        this.proyectoRepository.agregarProyecto(proyecto);
        this.servicioProyectoExternas.sincronizarConServiciosExterno(proyecto);
    }
    obtenerTodosProyectos() {
        return this.proyectoRepository.obtenerTodosProyectos();
    }
}
exports.ServicioProyectos = ServicioProyectos;
