// Manipulacion de arreglos
// Length
let array = [1, 2, 3, 4, 5];
console.log(array.length);

// Recorrer arreglos con foreach
array.forEach(function(element, index) {
    console.log(element, index);
});

//Mutabilidad en arrays
//push
let letras = ['a', 'b', 'c'];
letras.push('d');
console.log(letras);

// Shift elimina el primer elemento del arreglo. Modifica el arreglo
let primerLetra = letras.shift();
console.log(primerLetra, letras);

// Unshift agrega un elemento al inicio del arreglo. Modifica el arreglo
letras.unshift('x');
console.log(letras);

// pop elimina el ultimo elemento del arreglo. Modifica el arreglo
let ultimaLetra = letras.pop();
console.log(letras, ultimaLetra);

// splice agrega elementos al arreglo. Modifica el arreglo
// Primer parametro es la posicion del arreglo donde se agregara el elemento
// Segundo parametro es la cantidad de elementos a eliminar
// Tercer parametro es el elemento a agregar
letras.splice(1, 0, 'y');
console.log(letras);

// slice crea una copia del arreglo. No modifica el arreglo original
// Primer parametro es la posicion del arreglo donde se empieza a copiar
// Segundo parametro es la posicion del arreglo donde se termina de copiar
let copia = letras.slice(0, 2);
console.log(letras, copia);

// Concatenar arreglos
let nuevoArreglo = letras.concat(['z', 'w']);
console.log(letras, nuevoArreglo);

// Map crea un nuevo arreglo con los elementos modificados
let alumnos = ['Juan', 'Pedro', 'Maria']; 
let asistencia = alumnos.map((alumno) =>{
    return {
        nombre: alumno,
        asistencia:false
    }
});
console.log(asistencia);
console.log(alumnos);

// Map ejemplo complejo modificando el arreglo original. Modificamos un objeto
let productos = [
    {nombre: 'camisa', precio: 25},
    {nombre: 'pantalon', precio: 60},
    {nombre: 'zapatos', precio: 120}
];

let productoSinModificarImpuesto = productos.map((producto)=>{
    return{
        ...producto,    // spread operator
        impuesto: 0.16
    }
})
console.log(productos);         // no se modifica la referencia en memoria
console.log(productoSinModificarImpuesto);

let productosModificadoImpuesto = productos.map((producto) => {
    producto.impuesto = .12;
    return producto
})
console.log(productos);         //se modifica la referencia en memoria
console.log(productosModificadoImpuesto);


// Obteniedo todo los atributos de un objeto
let precios = productos.map((producto) =>  producto.precio);
console.log(precios);

// Filter crea un nuevo arreglo con los elementos que cumplan la condicion
let students = [
    {name: 'Juan', age: 20, matriculado: true},
    {name: 'Pedro', age: 18, matriculado: false},
    {name: 'Maria', age: 17, matriculado: true},
    {name: 'Lucia', age: 24, matriculado: false}
];

let senior = students.filter((student) => student.age > 18);
console.log(senior);
let matriculado = students.filter((student) => student.matriculado);
console.log(matriculado);
let seniorMatriculado = students.filter((student) => student.age > 18 && student.matriculado);
console.log(seniorMatriculado);

// Reduce crea un nuevo valor a partir de los elementos del arreglo
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((total, number) => total + number);
console.log(sum);

// Reduce ejemplo complejo
let productosReduce = [
    {nombre: 'camisa', precio: 25, totalVendido:5},
    {nombre: 'pantalon', precio: 60, totalVendido:12},
    {nombre: 'zapatos', precio: 120, totalVendido:25}
];
let result =  productosReduce.reduce((acumulador, producto) => {
    let total = producto.totalVendido * producto.precio;
    acumulador[producto.nombre] = total;
    return acumulador;
},{});
console.log(result);

//Encadenadno map y reduce
let students = [
    {name: 'Juan', age: 20, matriculado: true},
    {name: 'Pedro', age: 18, matriculado: false},
    {name: 'Maria', age: 17, matriculado: true},
    {name: 'Lucia', age: 24, matriculado: false}
];
let result = students
    .map((student) => student.matriculado)
    .reduce((acumulador, matriculado) => {
        if(matriculado){
            acumulador.matriculado++;
        }else{
            acumulador.noMatriculados++;
        }
        return acumulador;
    },{matriculado:0, noMatriculados:0});
console.log(result);

// Some y Every 
//Some  devuelve true si al menos un elemento cumple la condicion
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let unPar = numeros.some((number) => number % 2 === 0);
console.log(unPar);

//Every devuelve true si todos los elementos cumplen la condicion
let todoPares = numeros.every((number) => number % 2 === 0);
console.log(todoPares);

// Find devuelve el primer elemento que cumpla la condicion
let students = [
    {name: 'Juan', age: 20, matriculado: true},
    {name: 'Pedro', age: 18, matriculado: false},
    {name: 'Maria', age: 17, matriculado: true},
    {name: 'Lucia', age: 24, matriculado: false}
];
let student = students.find((student) => student.age > 18);
console.log(student);

// FindIndex devuelve el indice del primer elemento que cumpla la condicion
let index = students.findIndex((student) => student.age > 18);
console.log(index);

// Includes devuelve true si el elemento esta en el arreglo
let includeStudent = students.includes({name: 'Pedro', age: 18, matriculado: false});
console.log(includeStudent);

//Join devuelve un string con todos los elementos del arreglo separados por un caracter
let joinStudents = students.join(' - ');
console.log(joinStudents); // Se muestra arreglo de objetos porque no puede hacer join de objetos a string
//solucion
let joinStudents2 = students.map((student) => student.name).join(' - ');
console.log(joinStudents2);

// Generador de csv
let cvsGenerator = (array, separator=',') => {
    let header = Object.keys(array[0]).join(separator);
    let data = array.map((element) => Object.values(element).join(separator));
    console.log(header);
    data.forEach((element) => console.log(element));
}
let csvResult = cvsGenerator(students);