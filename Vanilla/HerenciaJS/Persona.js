class Persona{
    static contPersona = 0

    constructor(name, lastname, edad){
        this._name = name
        this._lastname = lastname
        this._edad = edad
        this._id = ++Persona.contPersona
    }
    get id(){return this._id}
    get name(){return this._name}
    get lastname(){return this._lastname}
    get edad(){return this._edad}
    
    set name(name){this._name = name}
    set lastname(lastname){this._lastname = lastname}
    set edad(edad){
        if(isNaN(edad)){
            console.log("No es un numero");
        }else{
            this._edad = edad
        }
    }

    nombreCompleto(){
        return `${this._id} ${this._name} ${this._lastname} - ${this._edad}`
    }
    
    toString(){
        return this.nombreCompleto()
    }
}
module.exports.Persona = Persona