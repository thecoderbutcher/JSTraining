/* Clase

A raíz de EMAC6 podemos usarlo
Antes se debia usar el prototype para poder emular clases
Recuerda una clases es una abstracción para representar ciertos elementos del mundo real
Nos ayudar organizar mucho nuestro código usando clases
Ejemplo 
*/

//Sintaxis a partir de ES6:
class Cat {
    constructor(cat) {
        this.name = cat;
    }
    greet() {
        return "Hola! Mis dueñ@s me llaman " + this.name;
    }
}

const cat = new Cat("Michi");

// Antes de ES6
function Person(name) {
    this.name = name;
}
var person = new Person("Alex");
console.log(person.name); //> Alex
