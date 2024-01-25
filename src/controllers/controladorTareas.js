"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControladorTareas = void 0;
const express_1 = require("express");
class ControladorTareas {
    constructor(servicioTareas) {
        this.servicioTareas = servicioTareas;
        this.router = (0, express_1.Router)();
        this.inicializarRutas();
    }
    inicializarRutas() {
        this.router.get('/tareas', this.obtenerTodasTareas.bind(this));
        this.router.post('/tareas', this.agregarTarea.bind(this));
    }
    obtenerTodasTareas(req, res) {
        const tareas = this.servicioTareas.obtenerTodasTareas();
        res.json({ tareas });
    }
    agregarTarea(req, res) {
        const nuevaTarea = req.body;
        this.servicioTareas.agregarTarea(nuevaTarea);
        res.status(201).json({ mensaje: 'Tarea Agregada Correctamnete' });
    }
    obtenerRouter() {
        return this.router;
    }
}
exports.ControladorTareas = ControladorTareas;
