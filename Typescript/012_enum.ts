// Tipo enum en typescript
// En typescript se puede definir un tipo de dato llamado enum, que es una lista de valores que pueden ser usados como constantes.
enum Color{
    Rojo = 1,
    Verde = 'green',
    Azul = 'blue'
}
let color:Color = Color.Rojo;
console.log(color);
console.log(Color.Azul);

//Never en typescript
// En typescript se puede definir un tipo de dato llamado never, que es un tipo de dato que nunca deberia suceder.
// Este tipo de dato nunca deberia suceder, por lo que nunca deberia ser usado.
let neverVar:never;
// neverVar = 1; -> Error
// neverVar = true; -> Error
// neverVar = 'a'; -> Error
// neverVar = {}; -> Error
// neverVar = []; -> Error
// neverVar = () => {}; -> Error
// neverVar = null; -> Error
// neverVar = undefined; -> Error
// neverVar = Symbol(); -> Error

// Type assertions en typescript
// En typescript se puede hacer una asercion de tipo de dato.
// Este tipo de dato se usa para hacer una asercion de tipo de dato.
// Ejemplo:
let someVar:any = 'Hello World';
let contString:number = (<string>someVar).length;
console.log(contString);


