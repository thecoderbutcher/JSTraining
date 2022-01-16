class Producto{
    static contProducto = 0;

    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.idProducto = ++Producto.contProducto;
    }
    get getNombre(){return this.nombre;}
    get getPrecio(){return this.precio;}
    get getIdProducto(){return this.idProducto;}

    set setNombre(nombre){this.nombre = nombre;}
    set setPrecio(precio){this.precio = precio;}

    toString(){
        return `${this.nombre} ${this.precio} ${this.idProducto}`
    }
}
module.exports.Producto = Producto;