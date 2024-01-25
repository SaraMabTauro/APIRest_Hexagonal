import { Proyecto } from "../domain/proyecto";
import { ServicioProyectoExternas } from "../ports/servicioProyectoExternas";

class ServicioProyectoExternasAdapter implements ServicioProyectoExternas {

    sincronizarConServiciosExterno(proyecto: Proyecto): void {
        console.log(`Sincronizando proyecto con servicio externo:`, proyecto.nombre);
    }
}

export { ServicioProyectoExternasAdapter };
