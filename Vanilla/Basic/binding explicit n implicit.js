// Enlace implicitos
const house = {
    dogName: 'fido',
    dogGreeting: function () {
        console.log(`Hi, I'm ${this.dogName}`)
    }
}
house.dogGreeting();

// Enlace explicito
function greeting(){
    console.log(`Hi, I'm ${this.dogName}`)
}

const newHouse = {
    dogName: 'alexis'
}

greeting.call(newHouse);

// explicito con mas variables
function superGreeting(owner, address){
    console.log(`Hi, I'm ${this.dogName} my owner is ${owner} and  I live in ${address}`)
}
const owner = 'Dj'
const address = 'Av live 123'

superGreeting.call(newHouse, owner, address)

/* Binding en JavaScript se refiere a cómo la palabra clave this está vinculada o asociada en una función. Así que, entender los diferentes tipos de “binding” es esencial para comprender cómo se comporta this en diferentes situaciones. Veamos los cinco tipos principales de “binding”:

Implicit Binding:
Ocurre cuando se invoca un método de un objeto, y this se vincula al objeto que contiene el método.

Ejemplo:
 */

const person = {
    name: 'Adam',
    greet: function() {
    console.log(`Hello, I'm ${this.name}`);
    }
};

person.greet(); // Output: Hello, I'm Adam

/* Explicit Binding:
Ocurre cuando se usan métodos como call, apply, o bind para establecer explícitamente el valor de this.

Ejemplo:
 */
function greet() {
  console.log(`Hello, I'm ${this.name}`);
}

const adam = { name: 'Adam' };

greet.call(adam); // Output: Hello, I'm Adam
/* New Binding:
Ocurre cuando una función se invoca con la palabra clave new, creando así un nuevo objeto y vinculando this a ese objeto.

Ejemplo: */

function Person(name) {
  this.name = name;
}

const adam = new Person('Adam');
console.log(adam.name); // Output: Adam
/* Lexical Binding:
Ocurre cuando se utiliza this en una función dentro de otra función. En este caso, this se vincula al contexto léxico de la función exterior.

Ejemplo:
 */
const person = {
  name: 'Adam',
  greet: function() {
    const innerFunction = () => {
      console.log(`Hello, I'm ${this.name}`);
    };
    innerFunction();
  }
};

person.greet(); // Output: Hello, I'm Adam

/* Window Binding:
Ocurre cuando ninguna de las reglas anteriores se aplica y this se vincula al objeto global (por ejemplo, window en el navegador).

Ejemplo (ejecutar en el navegador):
 */
function showName() {
  console.log(this.name);
}

window.name = 'Adam';
showName(); // Output: Adam