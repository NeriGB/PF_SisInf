export class Usuario {
    _id?: number;
    usuario: string;
    contraseña: string;
    

    constructor(usuario: string, contraseña: string){
        this.usuario = usuario;
        this.contraseña = contraseña;
    }
}