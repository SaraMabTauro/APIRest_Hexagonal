"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControladorProyectos = void 0;
const express_1 = require("express");
const proyecto_1 = require("../domain/proyecto");
class ControladorProyectos {
    constructor(servicioProyectos) {
        this.servicioProyectos = servicioProyectos;
        this.router = (0, express_1.Router)();
        this.inicializarRutas();
    }
    inicializarRutas() {
        this.router.get('/proyectos', this.obtenerTodosProyectos.bind(this));
        this.router.post('/proyectos', this.agregarProyecto.bind(this));
    }
    obtenerTodosProyectos(req, res) {
        const proyectos = this.servicioProyectos.obtenerTodosProyectos();
        res.json({ proyectos });
    }
    agregarProyecto(req, res) {
        try {
            const { nombre, descripcion, fechaInicio, fechaFin, estado } = req.body;
            const nuevoProyecto = new proyecto_1.Proyecto('', nombre, fechaInicio, estado, descripcion, fechaFin);
            this.servicioProyectos.agregarProyecto(nuevoProyecto);
            res.status(201).json({ mensaje: 'Proyecto agregado correctamente' });
        }
        catch (error) {
            console.error('Error al agregar el proyecto:', error);
            res.status(400).json({ error: 'No se pudo agregar el proyecto' });
        }
    }
    obtenerRouter() {
        return this.router;
    }
}
exports.ControladorProyectos = ControladorProyectos;
