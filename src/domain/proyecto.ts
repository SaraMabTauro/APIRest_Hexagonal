class Proyecto {
    id: string;
    nombre: string;
    descripcion?: string;
    fechaInicio: Date;
    fechaFin?: Date;
    estado: string;

    constructor(id: string, nombre: string, fechaInicio: Date, estado: string, descripcion?: string, fechaFin?: Date){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion || '';
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin || undefined;
        this.estado = estado;
    }
}

export { Proyecto };
