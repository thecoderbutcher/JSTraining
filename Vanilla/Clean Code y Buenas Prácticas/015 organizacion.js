/* Porque tener setter y getters
Los setters y getters son funciones para asignar y devolver un valor. Por ejemplo ten en cuenta los siguientes ejemplos */


// SIN gettes y setters ❌
class Person {
    constructor(name) {
        this.name = name
    }
}
const irving = new Person("irving")
irving.name = "Irvong" // asignando propiedad
console.log(irving.name) // accediendo

// CON getters y setters ✔️
class Person {
    constructor(name) {
        this._name = name
    }

    getName(){
        return this._name
    }

    setName(newValue){
        this._name = newValue
    }
}

const irving = new Person("irving")
irving.name = "Irvong" // asignando propiedad
console.log(irving.name) // accediendo

/* 
Estas dos classes hacen los mismo, asignan y retornan propiedad. Suena un poco como a lo mismo, no? Porque usar setters y getters entonces? . 
Ahí esta el asunto, con los getters y setters nosotros podemos crear ciertas validaciones. Por ejemplo, para asignar el valor a irving.name = 4, 
nosotros podemos validar que el nuevo valor sea de tipo string. 
Con los setters se puede lograr, mientras que sin ellos, no es posible. . Lo mismo aplica para los getters. 
Lo que se esta haciendo es un proxy, o una capa de validación para ver si el dato que se quiere entregar o asignar puede ejecutar esa 
acción de acuerdo a diversas validaciones o contextos 
*/
/* 
Variables → Son conocidas como propiedades en el mundo POO → son todos esos elementos donde vamos a guardar información.
Constantes → Son todos esos elementos que no van a cambiar su valor, también son conocidas como propiedades
Variables estáticas → Son elementos que pueden o no estar en la clase.
Métodos → Tus métodos son tus funciones, solo que en POO se le reconoce así, no olvides que dentro de una clase los métodos deben ser ordenados de mayor importancia a menor importancia. Lo ordenas de la siguiente manera, creas una clase y esta clase tiene un método funcional y los otros métodos que se crean es para apoyar el primer método.
Funciones estáticas → se le dicen estáticas, ya que estas no deben ser heredadas a otra clase, solo se usan en la clase principal.
Getters y setters → Estas permiten alterar y obtener alguna propiedad de tu clase. Recuerda esto se usa para no poder acceder directamente a la propiedad JS si lo permite, pero NO es buena práctica. */

/**
 * El comentario no debe explicar:

❌ El ¿Qué? ⇒ porque el código debe ser Autodescriptivo
❌ El ¿Cómo? ⇒ el código debe ser Autoexplicativo
✅ Sino el ¿Por qué? // Comentar explicando los Criterios, aportando valor
“No comentes código mal escrito, reescríbelo.” Brian Kernighan

Si bien, al usar correctamente la nomenclatura, el ordenamiento de nuestras variables, funciones y clases y respetar el principio de responsabilidad única, 
va a hacer que nuestro código sea mucho más fácil de entender, no significa que se deba dejar de añadir comentarios. 
Por ejemplo, añadir un comentario sobre alguna librería externa que se haya utilizado.


Reglas para trabajar en equipo

Para tener un formato coherente es recomendable:

Problemas similares, soluciones similares: seguir patrones.
Densidad, apertura y distancia vertical: todo lo que esté relacionado, manterlo junto en las líneas de código.
Lo más importante va primero: de la funcionalidad principal se van a llamar otras funciones o métodos y se desglosarán a partir de ahí, es más intuitivo.
Indentación: respetar mismos espacios de tabulación (2 o 4).

 */