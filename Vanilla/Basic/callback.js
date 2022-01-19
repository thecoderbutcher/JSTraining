// Una funcion callback es una funcion que se pasa como parametro a otra funcion.
const printResult = (a,b, callback) => {
    console.log(`The result is ${callback(a,b)}`);
}

const Sum = (a,b) => a + b;
const Mult = (a,b) => a * b;
const Div = (a,b) => a / b;
const Sub = (a,b) => a - b;

printResult(1,2, Sum);
printResult(1,2, Mult);
printResult(1,2, Div);
printResult(1,2, Sub);

// SetTimeout y llamadas asincronas
const asyncPrint = (msg) => console.log(msg);

setTimeout(() => asyncPrint('Hola'), 2000); // Hola
console.log("Ultimo mensaje de la ejecucion");

// SetInterval y llamadas asincronas 
let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
} 
setInterval(reloj, 1000);
