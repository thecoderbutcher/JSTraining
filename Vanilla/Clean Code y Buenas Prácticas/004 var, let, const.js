/* 
var - no respeta ambitos de bloque - ambioto global
let - si respeta ambitos de bloque
const - valores que no cambian NUNCA se escribe en mayuscula

*/
// Var
var age = 5;
{
    console.log(`la edad es ${age}`)
    var age = 29
}
console.log(`la edad es ${age}`)
age = age * 2;
console.log(`la edad es ${age}`)

//let 
let age = 5;
{
    let age = 29
    console.log(`la edad es ${age}`)
}
console.log(`la edad es ${age}`)
age = age * 2;
console.log(`la edad es ${age}`)
