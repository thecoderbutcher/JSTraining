// Emitiendo eventos con EventEmitter
let events = require('events').EventEmitter;
let emisor = new events.EventEmitter();

emisor.on('saludo', (mensaje, status) => {
    console.log(`${status} ${mensaje}`);
});

emisor.emit('saludo', 'Hola', 200);

// Emitiendo eventos con EventEmitter
let EventEmitter = require('events').EventEmitter;

class Mascota extends EventEmitter {
    constructor(nombre) {
        super();
        this.nombre = nombre;
    }
    saludar() {
        console.log(`Hola soy ${this.nombre}`);
    }
}

let canela = new Mascota('Canela');

canela.on('dice', (dice) => { // Evento dice es un evento propio de la clase Mascota 
    console.log(`${canela.nombre} dice ${dice}`);
})

canela.emit('dice', 'Guau');    

