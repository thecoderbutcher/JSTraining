let time = 3000;
let actualTime = 0;
let intervalTime = 50;
let porcentaje = 0;

const progressBar = (p) => {
    process.stdout.clearLine(); // Limpia la linea actual
    process.stdout.cursorTo(0); // Posiciona el cursor en la primera columna
    process.stdout.write(`${p}%`); // Imprime el porcentaje
}

setInterval(() => { // Intervalo de tiempo
    actualTime += intervalTime;
    porcentaje = Math.floor((actualTime * 100) / time); // Calcula el porcentaje
    progressBar(porcentaje);
    //console.log(`Tiempo trancurrido_ ${actualTime/1000} segundos`)
}, intervalTime);

setTimeout(() => { // Tiempo de espera
    console.log("Message after 3 seconds");
}, time);

progressBar(porcentaje);