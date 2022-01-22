// Funciones en TypeScript:
// Las funciones en TypeScript son como las funciones en JavaScript, pero con una diferencia: 
// las funciones en TypeScript tienen un tipo de retorno, que es el tipo de dato que devuelve la funcion.

function sumar(a:number,b:number):number {
    return a + b;
}
const suma:number = sumar(1,2);
console.log(suma); // 3  

//Tipos de funciones en TypeScript
function mostar():void{
    console.log("Funcion tradicional");
}
// Arrow functions
const mostrarArrow = ():void => console.log("Funcion flecha");

mostar()
mostrarArrow()

// Parametros opcionales
const mostrarOpcional = (nombre:string, apellido?:string):void => {
    if(apellido){
        console.log(`${nombre} ${apellido}`);
    }else{
        console.log(`${nombre}`);
    }
}
mostrarOpcional('Juan'); //Paso solo un parametro
mostrarOpcional('Juan','Perez'); //Paso dos parametros

// Parametros por defecto
const mostrarDefecto = (nombre:string, apellido:string = 'Perez'):void => {
    console.log(`${nombre} ${apellido}`);
}
mostrarDefecto('Juan'); //Paso solo un parametro
mostrarDefecto('Juan','GIL'); //Paso dos parametros

//Parametros REST
const mostrarRest = (...nombres:string[]):void => {
    console.log(nombres);
}
mostrarRest('Juan','Perez','Garcia'); //Paso tres parametros
mostrarRest('Juan','Perez'); //Paso dos parametros
