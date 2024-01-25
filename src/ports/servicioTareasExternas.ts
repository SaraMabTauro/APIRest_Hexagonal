import { Tarea } from "../domain/tarea";

interface ServicioTareasExternas{
    sincronizarConServiciosExterno(tarea: Tarea): void;
}

export { ServicioTareasExternas};