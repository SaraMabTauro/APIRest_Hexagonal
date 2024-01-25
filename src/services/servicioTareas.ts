import { TareaRepository } from "../ports/tareaRepository";
import { ServicioTareasExternas } from "../ports/servicioTareasExternas";
import { Tarea } from "../domain/tarea";


class ServicioTareas {
    private tareaRepository: TareaRepository;
    private servicioTareasExternas : ServicioTareasExternas;

    constructor(tareaRepository: TareaRepository, servicioTareasExternas: ServicioTareasExternas){
        this.tareaRepository = tareaRepository;
        this.servicioTareasExternas = servicioTareasExternas;
    }

    agregarTarea(tarea: Tarea){
        this.tareaRepository.agregarTarea(tarea);
        this.servicioTareasExternas.sincronizarConServiciosExterno(tarea); 
    }

    obtenerTodasTareas(): Tarea[] {
        return this.tareaRepository.obtenerTodasTareas();
    }

}

export { ServicioTareas };