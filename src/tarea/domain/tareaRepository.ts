import { Tarea } from "../domain/tarea";

interface TareaRepository {
    agregarTarea(tarea: Tarea): boolean;
    obtenerTodasTareas():Tarea[];
    eliminarTareas(idTarea: String): boolean;
}

export {TareaRepository};