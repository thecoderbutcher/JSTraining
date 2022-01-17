class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipo = tipoEntrada;
        this._marca = marca;
    }
    get tipo(){return this._tipo;}
    get marca(){return this._marca;}

    set tipo(tipo){this._tipo = tipo;}
    
    set marca(marca){this._marca = marca;}

}
module.exports.DispositivoEntrada = DispositivoEntrada;