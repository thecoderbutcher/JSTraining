class Computadora{
    static contComputadora = 0;
    
    constructor(nombre, teclado, raton, monitor){
        this._nombre = nombre;
        this._teclado = teclado;
        this._raton = raton;
        this._monitor = monitor;
        this._id = ++Computadora.contComputadora;
    }
    toString(){
        return `Computadora: ${this._id} - ${this._nombre} - ${this._teclado.toString()} - ${this._raton.toString()} - ${this._monitor.toString()}`;
    }
}
module.exports.Computadora = Computadora;