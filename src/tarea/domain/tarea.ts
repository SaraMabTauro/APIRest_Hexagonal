class Tarea {
    id: string;
    titulo: string;
    descripcion?: string;
    fecha_creacion: Date;
    fecha_limite?: Date;
    estado: string;

    constructor(id: string, titulo: string, fecha_creacion: Date, estado: string, descripcion?: string, fecha_limite?: Date){
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion || '';
        this.fecha_creacion = fecha_creacion;
        this.fecha_limite = fecha_limite || undefined;
        this.estado = estado;
    }
}

export { Tarea }