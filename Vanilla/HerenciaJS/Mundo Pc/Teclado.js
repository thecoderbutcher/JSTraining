let {DispositivoEntrada} = require('./DispositivoEntrada');

class Teclado extends DispositivoEntrada{
    static contTeclado = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._id = ++Teclado.contTeclado;
    }

    toString(){
        return `Teclado: ${this._id} - ${this._tipoEntrada} - ${this._marca}`;
    }
}
module.exports.Teclado = Teclado;