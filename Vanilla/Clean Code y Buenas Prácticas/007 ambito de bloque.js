/* 
¿Qué es un bloque?
Un bloque puede ser cualquier bloque de código que esta dentro de corchetes (esto es particular de JS, en otros lenguajes funciona diferente). E jemplos:
*/


if (minNumber > maxNumber) {
  // block
}

for (let i = 0; i < maxNumbers; i++) {
 // block
}

while (minNumber < maxNumber) {
  // block
}
/*  
Ojo cuidado, porque un bloque no es lo mismo que una función. 
Cuando se hace una función, esta crea su propio contexto de ejecución. 
Es como un modulo aislado del contexto global, pero que aún así, puede acceder a el. . Un bloque no genera ningún tipo de contexto de ejecución
*/