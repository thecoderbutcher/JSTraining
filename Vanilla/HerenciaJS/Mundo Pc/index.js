let {Teclado} = require('./Teclado');
let {Raton} = require('./Raton');
let {Monitor} = require('./Monitor');
let {Computadora} = require('./Computadora');
let {Orden} = require('./Orden');

let teclado = new Teclado('USB', 'Logitech');
let raton = new Raton('USB', 'Logitech');
let monitor = new Monitor('LED', 'LG');
let computadora = new Computadora('PC', teclado, raton, monitor);
let orden = new Orden();

orden.agregarComputadora(computadora);
console.log(orden.toString());