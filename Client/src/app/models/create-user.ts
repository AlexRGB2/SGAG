import { Optional } from "@angular/core";

export class CreateUser {

    id!: number;
    nombreUsuario: String;
    edad: number;
    sueldo: number;
    turno: String;
    email: String;
    telefono: String;
    password: String;
    roles: Optional ;

    constructor(nombreUsuario: String,edad: number,sueldo: number,turno: String,email: String,telefono:String ,password: String, roles:Optional ){
        this.nombreUsuario=nombreUsuario;
        this.edad=edad;
        this.sueldo=sueldo;
        this.turno=turno;
        this.email=email;
        this.telefono=telefono;
        this.password=password;
        this.roles=roles;
    }
}
