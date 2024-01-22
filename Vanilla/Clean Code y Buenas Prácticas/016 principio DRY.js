/* Principio DRY: Don’t repeat yourself (No te repitas a ti mismo).

No repetir código, sino extraerlo a una clase o función para poder reutilizarlo. */


// Obtener un promedio
// Ejemplo de código que se repite
const jhonAverage = (90 + 50 + 70) / 3;
const alexAverage = (80 + 90 + 70 + 80) / 4;
const candeAverage = (40 + 100) / 2;

console.log(jhonAverage, alexAverage, candeAverage);

// Solución del código anterior para ser reutilizado
function getAverage(...grades) {
	return grades.reduce((prev, current) => prev + current, 0) / grades.length;
}

const jhonAverage2 = getAverage(90,50,70);
const alexAverage2 = getAverage(80, 90,70, 80);
const candeAverage2 = getAverage(40, 100);

console.log(jhonAverage2, alexAverage2, candeAverage2);