export class Proveedor {
    _id?: number;
    proveedor: string;
    telefono: number;

    constructor(proveedor: string, telefono: number){
        this.proveedor = proveedor;
        this.telefono = telefono;
    }
}

export class Producto {
    _id?: number;
    nombre: string;
    categoria: string;
    stock: number;
    precio: number;

    constructor(nombre: string, categoria: string, stock : number, precio: number){
        this.nombre = nombre;
        this.categoria = categoria;
        this.stock = stock;
        this.precio = precio;
    }
}