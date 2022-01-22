//JSX es la posibilidad de combinar html con js
const name = 'Juan';
const hola = (<h1>Hola, {name}</h1>); //Sintaxis sugar para crear un elemento html

//Trasnpilacion
const element = React.createElement('h1', {}, 'Hola, Juan'); //Crea un elemento html con transpilado