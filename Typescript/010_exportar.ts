// Exportar en TypeScript
// Para exportar una clase o una interface en TypeScript se debe usar la palabra reservada export
export class Test {
    constructor() {
        console.log('Test');
    }
}

export const numeroExportado = 10;

//Exportar por defecto en TypeScript
class Test2 {
    constructor() {
        console.log('Test2');
    }
}

export default Test2;