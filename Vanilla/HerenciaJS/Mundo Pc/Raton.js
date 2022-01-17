let {DispositivoEntrada} = require('./DispositivoEntrada');
class Raton extends DispositivoEntrada{
    static contRaton = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._id = ++Raton.contRaton;
    }
    toString(){
        return `Raton: ${this._id} - ${this._tipoEntrada} - ${this._marca}`;
    }
}
module.exports.Raton = Raton;