'use strict'; // Este modo es mas estricto que el modo estandar.

c = "text"; // debemos declarar la variable c antes de usarla.
console.log(c); // Erorr: c is not defined

let c = "text"; // Declaramos la variable c con el modo estricto.
console.log(c); // text

// Tambien se puede usar el modo estricto en una funcion.
function test() {
    'use strict';
    c = "text";
    console.log(c); // Error: c is not defined
}