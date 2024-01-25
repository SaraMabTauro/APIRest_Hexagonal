"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioTareas = void 0;
class ServicioTareas {
    constructor(tareaRepository, servicioTareasExternas) {
        this.tareaRepository = tareaRepository;
        this.servicioTareasExternas = servicioTareasExternas;
    }
    agregarTarea(tarea) {
        this.tareaRepository.agregarTarea(tarea);
        this.servicioTareasExternas.sincronizarConServiciosExterno(tarea);
    }
    obtenerTodasTareas() {
        return this.tareaRepository.obtenerTodasTareas();
    }
}
exports.ServicioTareas = ServicioTareas;
