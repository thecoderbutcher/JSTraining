const mensaje = "Hola soy una cadena de texto";
const patron = /cadena/g

console.log(patron.test(mensaje)); // true
console.log(patron.test(mensaje)); // false lastIndex no queda en 0 porque ya se ejecuto la primera vez

//posible solucion: patron.lastIndex = 0;
// otra solucion: 
console.log(mensaje.match(patron) !== null); // true
console.log(mensaje.match(patron) !== null); // true