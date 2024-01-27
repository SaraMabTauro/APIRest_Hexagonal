// src/proyecto/Domain/ProyectoRepository.ts

import { Proyecto } from "../domain/proyecto";

interface ProyectoRepository {
    agregarProyecto(proyecto: Proyecto): boolean;
    obtenerTodosProyectos(): Proyecto[];
}

export { ProyectoRepository };
