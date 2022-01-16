const {Persona} = require('./Persona.js')

class Empleado extends Persona{
    static contEmpleado = 0
    constructor(name, lastname, edad, sueldo){
        super(name, lastname, edad)
        this._sueldo = sueldo
        this._id = ++Empleado.contEmpleado
    }
    get id(){return this._id}
    get sueldo(){return this._sueldo}
    set sueldo(sueldo){this._sueldo = sueldo}

    toString(){
        return super.toString() + ` - ${this._sueldo}`
    }
}
module.exports.Empleado = Empleado