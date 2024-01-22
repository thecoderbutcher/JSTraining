/* 
Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.
Diferencias y limitaciones: No tiene sus propios enlaces a this o super y no se debe usar como métodos.
Esta funcionalidad viene con el EMAC6
Cuando creas una arrow functions su this queda relacionado al ambito externo. 
*/

// El return está implícito sino añadimos las llaves.
const getResult = () => "Results";

//Sin arrows functions
[1, 2, 3].map(function (n) {
    return n * 2;
})

// Con arrows functions
[
    (1, 2, 3)
].map((n) => n * 2);

// Ejemplos del this
const counterA = {
    number: 0,
    increase() {
        setInterval(() => console.log(++this.number), 1000);
    },
};

counterA.increase(); //> 1 2 3 4 5

const counterB = {
    number: 0,
    increase() {
        setInterval(function () {
            console.log(++this.number);
        }, 1000);
    },
};

counterB.increase(); //> NaN, NaN, NaN, NaN, NaN

const counter = {
    number: 0,
    increase() {
        setInterval(
            function () {
                console.log(++this.number);
            }.bind(this),
            1000
        );
    },
};

counter.increase(); //> 1 2 3 4 5