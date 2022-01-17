class Monitor{
    static contMonitor = 0;
    constructor(marca, tamano){
        this._marca = marca;
        this._tamano = tamano;
        this._id = ++Monitor.contMonitor;
    }
    get marca(){return this._marca;}
    get tamano(){return this._tamano;}
    get id(){return this._id;}

    set marca(marca){this._marca = marca;}
    set tamano(tamano){this._tamano = tamano;}
    toString(){
        return `Monitor: ${this._id} - ${this._marca} - ${this._tamano}`;
    }
}
module.exports.Monitor = Monitor;