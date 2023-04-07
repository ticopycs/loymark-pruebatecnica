import { Base } from "../base.model";

export class Usuario extends Base{
    nombre: String;
    apellido: String;
    email: String;
    fechaNacimiento: Date | null;
    telefono: Number;
    pais: String;
    contacto: Boolean;


    constructor(){
        super(),
        this.nombre = ""
        this.apellido = ""
        this.email = ""
        this.fechaNacimiento = null
        this.telefono = 0
        this.pais = ""
        this.contacto = false
    }
}