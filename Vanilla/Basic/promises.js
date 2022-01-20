// Las promesas son una forma de manejar la asincronia en javascript
// Los resultados de las promesas se pueden manejar con callbacks
// Promesas son objetos que se resuelven o se rechazan

let promise = new Promise((resolve, reject) => {
    // Cuando se resuelve la promesa
    resolve('Hola');
    // Cuando se rechaza la promesa
    reject('Adios');
});
promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

// Promesas con setTimeout
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola con retardo');
    }, 2000);
    console.log('fin de promesa');
});

promise2.then((result) => {
    console.log(result);
}); 

// async await es una forma de manejar la asincronia en javascript con promesas y callbacks 
let asyncFunction = async () => 'Hola desde una funcion asincrona con promesa';

asyncFunction().then((result) => {console.log(result);});

// promesas con async await
let promesaAsyncAwait = async () => {
    let promise = new Promise((resolve, reject) => {
        resolve('Promesa con async await');
    }); 
    console.log(await promise);

}
promesaAsyncAwait();

// promesas con async await y setTimeout
let promesaAsyncAwait2 = async () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promesa con async await y setTimeout');
        }, 2000);
    }); 
    console.log(await promise);

}
promesaAsyncAwait2();
console.log("Ultima linea");