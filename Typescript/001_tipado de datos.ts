// PARA COMPILAR DEBEMOS USAR EL COMANDO tsc 001_tipado de datos.ts
// PARA EJECUTAR DEBEMOS USAR EL COMANDO node 001_tipado de datos.js
// PARA AUTOCOMPILAR tsc --w 001_tipado de datos.ts
// Tipo numerico (number)
let numeros: number = 10;
// number =  '10'; -> Error no se le puede asignar un string a un numero
numeros += 12;
console.log(numeros);

// Tipo boolean (boolean)
let verdadero_falso: boolean = true;
// boolean = 'true'; -> Error no se le puede asignar un string a un boolean
console.log(verdadero_falso);

// Tipo string (string)
let cadena: string = 'Hola mundo';
// string = 10; -> Error no se le puede asignar un numero a un string
console.log(cadena);

