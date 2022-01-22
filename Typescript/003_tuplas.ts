// Tuplas en TypeScript: se debe respetar el orden de los elementos con tipos
let tupla : [number,string,boolean,any] = [1,'a',true,{nombre:'Juan'}];

// tupla[0] = 'a'; -> Error no se le puede asignar un string a un numero
tupla[0] = 10; // OK - tupla[0] = '10'; -> Error no se le puede asignar un string a un numero
console.log(tupla[0]);