export class UserActivityDTO {
    nombre: string;
    fechaCracion: Date|null;
    Actividad: string

    constructor(){
        this.nombre = "",
        this.fechaCracion = null,
        this.Actividad = ""
    }

}