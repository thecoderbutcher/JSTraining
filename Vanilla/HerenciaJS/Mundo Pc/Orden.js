class Orden{
    static contOrden = 0;
    constructor(){
        this._computadora = [];
        this._fecha = new Date();
        this._id = ++Orden.contOrden;
    }
    get computadora(){return this._computadora;}
    get fecha(){return this._fecha;}
    
    toString(){
        return `Orden: ${this._id} - ${this.computadora.toString()} - ${this._fecha}`;
    }
    
    agregarComputadora(computadora){
        this.computadora.push(computadora);
    }
}
module.exports.Orden = Orden;