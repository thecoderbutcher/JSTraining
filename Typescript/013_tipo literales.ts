//Tipos literales en TypeScript
// Los tipos literales son tipos que no se pueden instanciar, por ejemplo:
// let nombre:string = 'Juan';

type Colores = 'red' | 'green' | 'blue';
let colorRojo:Colores = 'red';

// Ejemplo Complejo
interface ValidacionExitosa{
    esValido: true;
    reason: null;
}
interface ValidacionFallida{
    esValido: false;
    reason: string;
}
type ResultadoValidacion = ValidacionExitosa | ValidacionFallida;

const result: ResultadoValidacion = {
    esValido: true,
    reason: null
};
