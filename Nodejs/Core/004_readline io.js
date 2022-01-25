const readline = require('readline'); // Importando el módulo readline de node.js

const rl = readline.createInterface({ // Creando una instancia de readline
    input: process.stdin, // Entrada estándar
    output: process.stdout // Salida estándar
});

let num = Math.floor(Math.random() * 10); // Generando un número aleatorio
let limite = 3; // Limite de intentos
let intentos = 0; // Contador de intentos

rl.question('Adivina el número: ', (answer) => { // Preguntando al usuario
    intentos++;
    if(answer.trim() == num) { // Si la respuesta es correcta
        rl.close(); // Cerrando el readline
    }else{
        rl.setPrompt(`Intento ${intentos} de ${limite}: `); // Cambiando el prompt
        rl.prompt(); // Preguntando al usuario
        rl.on('line', (answer) => { // Escuchando la respuesta
            if(answer.trim() == num) { // Si la respuesta estr correcta
                rl.close(); // Cerrando el readline
            }else{
                intentos++;
                if(intentos < limite) { // Si se ha alcanzado el limite de intentos
                    rl.setPrompt(`Intento ${intentos} de ${limite}: `); // Cambiando el prompt
                    rl.prompt(); // Preguntando al usuario
                }
                else{
                    rl.close(); // Cerrando el readline
                }
            }
        });
    }
});

rl.on('close', () => { // Cuando el readline se cierra
    console.log(`El numero era ${num}`);
    process.exit(); // Cerrando el proceso
});