import { Proyecto } from "../domain/proyecto";

interface ProyectoRepository {
    agregarProyecto(proyecto: Proyecto): boolean;
    obtenerTodosProyectos(): Proyecto[];
}

export { ProyectoRepository };
