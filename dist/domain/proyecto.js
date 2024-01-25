"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proyecto = void 0;
class Proyecto {
    constructor(id, nombre, fechaInicio, estado, descripcion, fechaFin) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion || '';
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin || undefined;
        this.estado = estado;
    }
}
exports.Proyecto = Proyecto;
