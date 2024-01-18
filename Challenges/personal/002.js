const numbers = [1, [2, 3], 4]
const copyNumbers = [...numbers]; //spread operator realiza una copia de un array

copyNumbers[1][0] = 10;

console.log(copyNumbers); // [1, [10, 3], 4]