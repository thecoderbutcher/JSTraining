const {Persona} = require('./Persona.js')

class Cliente extends Persona{
    static contCliente = 0
    constructor(name, lastname, edad){
        super(name, lastname, edad)
        this._fechaRegistro = new Date()
        this._id = ++Cliente.contCliente
    }
    get id(){return this._id}
    get fechaRegistro(){return this._fechaRegistro}
    set fechaRegistro(fechaRegistro){this._fechaRegistro = fechaRegistro}

    toString(){
        return super.toString() + ` - ${this._fechaRegistro}`
    }
}
module.exports.Cliente = Cliente