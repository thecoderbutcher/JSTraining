/* Recuerda que al usar Clases tenemos la habilidad de generar herencia
Desde el EMAC6 podemos usar la palabra reservada extends para crear herencias
Anteriormente se usaba prototype para generar herencia
Ejemplo Herencia con EMAC6 */

//Clase padre
class Person{
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hola, mi nombre es ${this.name}`);
    }
}

//Clase hija
class Developer extends Person{
    constructor(name) {
        super(name);
    }
    writeCode(coffe) {
        coffe ? console.log ("Estoy desarrollando una nueva feature") : console.log("Necesito más café...")
    }
}

const dev = new Developer('nasher');

dev.writeCode()