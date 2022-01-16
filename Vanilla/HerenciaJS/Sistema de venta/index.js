const {Producto} = require('./Producto');
const {Orden} = require('./Orden');

let product = new Producto("Leche", 10);
let product2 = new Producto("Pan", 5);
let product3 = new Producto("Arroz", 15);
let product4 = new Producto("Huevos", 20);
let product5 = new Producto("Aceite", 30);

let orden = new Orden();
orden.agregarProducto(product);
orden.agregarProducto(product2);
orden.agregarProducto(product3);
console.log(orden.mostrarOrden());