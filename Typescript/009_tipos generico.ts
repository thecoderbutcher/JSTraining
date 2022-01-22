// Variables genericas
let generica:any = 'Hola';
generica = 1;
generica = true;
// Le puedo asignar cualquier valor a una variable generica. Evitar usarlo

// Funciones genericas
function mostrarGenerica<T>(dato:T):T{ // T puede ser cualquier tipo de dato. <T> indica que es una funcion generica
    return dato // Devuelve el valor que le paso;
}
const mostrarAny:number = mostrarGenerica(1);
const mostrartring:string = mostrarGenerica('Hola');

//Clases genericas
class Generica<T>{
    private dato:T;
    constructor(dato:T){
        this.dato = dato;
    }
    public getDato():T{
        return this.dato;
    }
}

// Interfaces genericas
interface GenericaInterface<T>{
    dato:T;
}