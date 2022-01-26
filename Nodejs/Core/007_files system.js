//!Este codigo funciona por bloque, puede causar conflictos con otros scripts, 
//!compilar por separados de acuerdo a la funcionalidad que se requiera

//Leer un directorio con readdir
let fs = require('fs');

let files = fs.readdirSync('./'); //leer el directorio sincronamente
console.log(files);

fs.readdir('./', (err, files) => { //leer el directorio asincronamente
    if (err) throw err;
        console.log(files);
});
console.log('Leyendo archivos');

// Leer archivos con readFile
let fs = require('fs');
let path = require('path');

fs.readdir('./', (err, files) => { //leer el directorio asincronamente
    files.forEach(file => { //recorrer el directorio
        let data = path.join(__dirname, "", file); 
        let stats = fs.statSync(data); //obtener los atributos de un archivo
        console.log(data, stats); //muestra la ruta y el tamaño del archivo
        if (stats.isFile() && data !== ('.DS_Store')) {
            fs.readFile(data, 'UTF-8', (err, data) => {  //leer archivos con UTF-8
                console.log(file,data); //imprimir el nombre del archivo y su contenido
                console.log('---'); //separador
            });
        }
    });
});              

//Crear y añadir datos a un archivo con appendFile y writeFile
let readline = require('readline');
let fs = require('fs');
let rl = readline.createInterface(process.stdin, process.stdout); //crear una interfaz de entrada y salida

rl.question('Escribe una frase: ', (answer) => {
    fs.writeFileSync(answer + '.txt','Frases ingresada: \n'+ answer); //escribir en un archivo
    rl.setPrompt('Escribe otra frase: ');
    rl.prompt();
    rl.on('line', (pending) => {
        fs.appendFileSync(answer + '.txt',pending.trim() + '\n'); //añadir datos a un archivo
        if(pending.toLocaleLowerCase().trim() === 'exit') {
            rl.close();
        }else {
            rl.setPrompt('Escribe otra frase: ');
            rl.prompt();
        }
    });
});

rl.on('close', () => {
    console.log('Adios');
    process.exit(0);
});

// Crear directiorios en nodeks con mkdir 
let readline = require('readline'); 
let fs = require('fs');
let path = require('path');
let rl = readline.createInterface(process.stdin, process.stdout);
let dir = "NuevoDirectorio";

if(fs.existsSync(dir)) console.log("Ya existe este directorio"); //verificar si existe un directorio
else fs.mkdirSync(dir, (err) =>  err? console.log(err): console.log("Directorio creado")); //crear un directorio

//Este codigo se puede combinar con el anterior para que al crear un archivo sea creado en un directorio nuevo

//Renombrar directorios con rename
let readline = require('readline');
let fs = require('fs');   
let rl = readline.createInterface(process.stdin, process.stdout);
let dir = "NuevoDirectorio";


if(fs.existsSync(dir)) {
    rl.question('Escribe el nuevo nombre del directorio: ', (answer) => {
        fs.renameSync(dir, answer); //renombrar un directorio
        rl.close();
    });
}   else console.log("No existe este directorio");

//Eliminar directorios con rmdir 
let fs = require('fs'); 
let dir = "carlos";
try {
    fs.rmdirSync(dir); //eliminar un directorio. Para eliminar un archivo se usa fs.unlinkSync(file)
    console.log("Directorio eliminado");
} catch (error) {
    console.log("No se pudo eliminar");
    console.log(error);
}

//Mover directorio o archivo con rename
let fs = require('fs');
let path = require('path');
let dir = "NuevoDirectorio";
let file = "archivo.txt";

if(fs.existsSync(dir)) {
    fs.renameSync(path.join(dir, file), path.join(__dirname, file)); //mover un archivo
    console.log("Archivo movido");
}
else console.log("No existe este directorio");

// Borrar varios archivos para luego borrar el directorio
let fs = require('fs');
fs.readdirSync('./').forEach(file => {
    fs.unlinkSync(file); //eliminar un archivo
}); //Si un directorio tiene archivos, no se puede eliminar
fs.rmdirSync('./'); //eliminar un directorio

//Leer archivo tipo JSON con readFile
let jsonFile = require('jsonfile.json');
console.log(jsonFile.rows); //imprimir el contenido del archivo
//Se puede recorrer con bucles forEach

// Leyendo con Fs
let fs = require('fs');
fs.readFile('./archivo.json', (err, data) => {  
    if (err) throw err;
    console.log(JSON.parse(data).rows);
});

//Leer archivos grandes con stream
let fs = require('fs');
let file = fs.createReadStream('./archivo.txt', 'UTF-8'); //crear un stream de lectura
let data = '';

file.once('data', () => { //una vez que se haya leido el archivo
    console.log('Iniciando lectura');
});
file.on('data', (chunk) => { //recorrer el archivo
    data += chunk;
});
file.on('end', () => {
    console.log(data);
});

//Escribir archivos con stream
let fs = require('fs');
let file = fs.createWriteStream('./archivo.txt', 'UTF-8'); //crear un stream de escritura
file.write('Hola mundo');
file.end();

