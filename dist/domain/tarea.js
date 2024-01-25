"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarea = void 0;
class Tarea {
    constructor(id, titulo, fecha_creacion, estado, descripcion, fecha_limite) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion || '';
        this.fecha_creacion = fecha_creacion;
        this.fecha_limite = fecha_limite || undefined;
        this.estado = estado;
    }
}
exports.Tarea = Tarea;
