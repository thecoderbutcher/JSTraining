// Constructor de objetos que recibe una lista de propiedades no determinadas
function Persona(){
    if(arguments.length > 0){
        this.name = arguments[0];
        arguments[1] != undefined ? this.lastname = arguments[1]:null
        arguments[2] != undefined ? this.yearold = arguments[2] : null
    }
}
let person = new Persona("lolo", "lolm", 32)
console.log(person);