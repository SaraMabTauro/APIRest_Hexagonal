import { Proyecto } from "../domain/proyecto";

interface ServicioProyectoExternas {
    sincronizarConServiciosExterno(proyecto: Proyecto): void;
}

export { ServicioProyectoExternas };
