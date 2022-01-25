let path = require('path'); // Importando el módulo path de node.js

// Objeto global en nodejs 
let saludo = 'Hola mundo';
console.log(saludo);

console.log(__filename); // ruta del archivo
console.log(__dirname); // ruta del directorio

console.log(`Archivo con path: $(path.basename(__filename))`); // nombre del archivo

// Objecto process
// El objeto process es un objeto global en node.js que contiene información sobre el entorno de ejecución del programa.
// El objeto process tiene una propiedad llamada argv que contiene un array con los argumentos pasados al programa.
console.log(process.argv); // argumentos de la linea de comandos
console.log(process.env); // variables de entorno
console.log(process.versions); // versiones de node.js
console.log(process.arch); // arquitectura de node.js
console.log(process.platform); // plataforma de node.js
console.log(process.title); // título del proceso
console.log(process.uptime()); // tiempo de ejecución del proceso
console.log(process.memoryUsage()); // uso de memoria del proceso
console.log(process.cwd()); // directorio actual
console.log(process.execPath); // ruta del ejecutable
console.log(process.stdout); // salida estándar
console.log(process.stderr); // salida de error
console.log(process.stdin); // entrada estándar
console.log(process.pid); // identificador del proceso

const search = (query) => {
    let index = process.argv.indexOf(query);
    return index > -1 ? process.argv[index + 1] : null;
}
let user = search('--user');
let pass = search('--password');

(user || pass) ? console.log(`User: ${user} Password: ${pass}`): console.log('No se ha especificado usuario y/o contraseña');
