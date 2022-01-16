let {Persona}  = require('./Persona.js')
let {Empleado} = require('./Empleado.js')
let {Cliente}  = require('./Cliente.js')

let persona = new Persona("Juan", "Perez", 30)
let cliente = new Cliente("Luis", "Gil", 30)
let empleado = new Empleado("Karla", "Pollo", 30, 1000)

console.log(Persona.contPersona);
console.log(Cliente.contCliente);
console.log(Empleado.contEmpleado);

console.log(persona.toString());
console.log(cliente.toString());
console.log(empleado.toString());