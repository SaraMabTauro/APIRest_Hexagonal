"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorTareas = void 0;
class GestorTareas {
    constructor(tareaRepository, servicioTareasExternas) {
        this.tareaRepository = tareaRepository;
        this.servicioTareasExternas = servicioTareasExternas;
    }
    agregarTarea(tarea) {
        this.tareaRepository.agregarTarea(tarea);
    }
    obtenerTodasTareas() {
        return this.tareaRepository.obtenerTodasTareas();
    }
    sincronizarTareasExternas() {
        const todasTareas = this.tareaRepository.obtenerTodasTareas();
        todasTareas.forEach(tarea => {
            this.servicioTareasExternas.sincronizarConServiciosExterno(tarea);
        });
    }
}
exports.GestorTareas = GestorTareas;
