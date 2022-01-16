class Orden{
    static contOrder = 0

    static MAX_PRODUCTOS = () => {
        return 5
    }
    constructor(){
        this.idOrder = ++Orden.contOrder
        this.productos = []
    }
    get getIdOrder(){return this.idOrder}

    agregarProducto(producto){
        if(this.productos.length < Orden.MAX_PRODUCTOS()){
            this.productos.push(producto)
        }
    }
    calcularTotal(){
        let total = 0
        for(let producto of this.productos){
            total += producto.getPrecio
        }
        return total
    }
    mostrarOrden(){
        let productosOrden = ""
        for(let producto of this.productos){
            productosOrden += producto.toString() + " "
        }
        return `${this.idOrder} ${productosOrden} ${this.calcularTotal()}`
    }
}
module.exports.Orden = Orden;