import { Tarea } from "../domain/tarea";
import { ServicioTareasExternas } from '../ports/servicioTareasExternas';

class ServicioTareasExternasAdapter implements ServicioTareasExternas{

    sincronizarConServiciosExterno(tarea: Tarea): void {
        console.log(`Sincronizando tarea con servicio externo:`, tarea.id)
    }
}

export {ServicioTareasExternasAdapter}