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
        this.router.delete('/tareas/:id', this.eliminarTareas.bind(this));
    }
    obtenerTodasTareas(req, res) {
        const tareas = this.servicioTareas.obtenerTodasTareas();
        res.json({ tareas });
    }
    agregarTarea(req, res) {
        const nuevaTarea = req.body;
        console.log(req.body);
        console.log(nuevaTarea);
        this.servicioTareas.agregarTarea(nuevaTarea);
        res.status(201).json({ mensaje: 'Tarea Agregada Correctamnete' });
    }
    eliminarTareas(req, res) {
        const idTarea = req.params.id;
        this.servicioTareas.eliminarTareas(idTarea);
        res.status(200).json({ mensaje: 'Tarea eliminada correctamente' });
    }
    obtenerRouter() {
        return this.router;
    }
}
exports.ControladorTareas = ControladorTareas;
