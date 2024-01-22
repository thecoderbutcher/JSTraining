/* Hoisting */

var greet = "Hello";

function saludar() {
    console.log(greet); //> undefined
    var greet = "Hi";
    console.log(greet); //> Hi
}

saludar(); // se invoca la función
/* la variable local greet se declara en la parte superior de la función saludar(), 
antes de que se imprima la variable global greet. Sin embargo, en el momento en que se imprime la variable local greet, 
aún no se le ha asignado un valor y, por lo tanto, su valor es undefined. JavaScript, cada vez que se define una variable dentro de una función, 
se crea una nueva instancia de esa variable en un ámbito local dentro de la función. Es decir, la variable local greet dentro de la función saludar() 
se refiere a una instancia diferente de la variable greet que la variable global greet que está definida fuera de la función, es otro espacio de memoria. */

//Funcion autoinvocada
(
    function(){
        console.log(greet);
        var greet = "Hi x2";
        console.log(greet)
    }
)();