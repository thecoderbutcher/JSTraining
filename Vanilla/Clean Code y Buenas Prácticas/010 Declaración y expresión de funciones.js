/* 
Funciones
Las funciones son entidades organizativas de cualquier lenguaje de programación.
Declaración de funciones:
 */

function myFunction() {
    return "Mi función a través de su declaración"
}
myFunction();

/* Expresión de funciones: */
const myExpresionFunction = function () {
    return "Mi función a través de su expresión"
}
myExpresionFunction();

/* función de expresión utilizando arrow function. */
const arrowFunction = () => "Results";
arrowFunction()

/* 
Si bien las dos cumplen el rol de la función, son diferentes: . 
A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. 
Ya que el hoisting solo se aplica en las palabras reservadas const, let, var y function. . 
Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, 
y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar. 
*/


/* Argumentos VS Parámetros
Argumentos: Se utilizan en las llamadas de la función para ejecutarla.
Se recomiendan max. 3 argumentos por función.
Parámetros: Se utilizan en la función para trabajar con elementos externos. */

// Parámetro: number
function getDouble (number) {
  return number * 2;
}
// Argumento: 10
getDouble(10); 

/* Se pueden establecer parámetros default que ayudan a mantener la integridad del código. Aunque no hay que abusar de su uso! */
// Parámetro por default:
function greet(person = 'extraño') {
    console.log("Hola " + person);
}
greet("Carina"); // "Hola Carina"
greet(); // "Hola extraño"

//Rest Operator: 
function add(x, y, ...args) {
    console.log(args);
}
/* Rest Operator:
Si se usa como parámetro, permite tener en cuenta parámetros adicionales y poder utilizarlos (y debe ser el último parámetro!)
Si se usa como argumento, expande los elementos de un array/objeto.
 */
const numbersA = [1, 2, 3];
const clonedNumbers = [...numbersA];
console.log(clonedNumbers) // [1, 2, 3]

const numbersB = [4, 6, 8]
const totalNumbers = [...numbersA, ...numbersB];
console.log(totalNumbers)