// Clases en TypeScript:
// Las clases en TypeScript son como las clases en JavaScript, pero con una diferencia:
// las clases en TypeScript tienen un constructor, que es el metodo que se ejecuta al crear una instancia de la clase.
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, puertas) {
        this.marca = marca;
        this.modelo = modelo;
        this.puertas = puertas;
    }
    Vehiculo.prototype.getMarca = function () { return this.marca; };
    Vehiculo.prototype.getModelo = function () { return this.modelo; };
    Vehiculo.prototype.getPuertas = function () { return this.puertas; };
    Vehiculo.prototype.setMarca = function (marca) { this.marca = marca; };
    Vehiculo.prototype.setModelo = function (modelo) { this.modelo = modelo; };
    Vehiculo.prototype.setPuertas = function (puertas) { this.puertas = puertas; };
    Vehiculo.prototype.acelearar = function () {
        console.log("Acelerando...");
    };
    Vehiculo.prototype.frenar = function () {
        console.log("Frenando...");
    };
    return Vehiculo;
}());
var vehiculo = new Vehiculo('Ford', 'Focus', 4);
console.log(vehiculo.getMarca());
console.log(vehiculo.getModelo());
console.log(vehiculo.getPuertas());
console.log(vehiculo.acelearar());
