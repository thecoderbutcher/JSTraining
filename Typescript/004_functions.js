// Funciones en TypeScript:
// Las funciones en TypeScript son como las funciones en JavaScript, pero con una diferencia: 
// las funciones en TypeScript tienen un tipo de retorno, que es el tipo de dato que devuelve la funcion.
function sumar(a, b) {
    return a + b;
}
var suma = sumar(1, 2);
console.log(suma); // 3  
//Tipos de funciones en TypeScript
function mostar() {
    console.log("Funcion tradicional");
}
// Arrow functions
var mostrarArrow = function () { return console.log("Funcion flecha"); };
mostar();
mostrarArrow();
// Parametros opcionales
var mostrarOpcional = function (nombre, apellido) {
    if (apellido) {
        console.log("".concat(nombre, " ").concat(apellido));
    }
    else {
        console.log("".concat(nombre));
    }
};
mostrarOpcional('Juan'); //Paso solo un parametro
mostrarOpcional('Juan', 'Perez'); //Paso dos parametros
// Parametros por defecto
var mostrarDefecto = function (nombre, apellido) {
    if (apellido === void 0) { apellido = 'Perez'; }
    console.log("".concat(nombre, " ").concat(apellido));
};
mostrarDefecto('Juan'); //Paso solo un parametro
mostrarDefecto('Juan', 'GIL'); //Paso dos parametros
//Parametros REST
var mostrarRest = function () {
    var nombres = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nombres[_i] = arguments[_i];
    }
    console.log(nombres);
};
mostrarRest('Juan', 'Perez', 'Garcia'); //Paso tres parametros
mostrarRest('Juan', 'Perez'); //Paso dos parametros
