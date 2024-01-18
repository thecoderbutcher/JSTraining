//No mezclar asincronia y sincronia
const array = [1, 2, 3];
const plusOne =  async n => n+1;

const result =  array.map(plusOne);
console.log(result); // Result = [Promise, Promise, Promise]

// No mezclar asincronia y sincronia