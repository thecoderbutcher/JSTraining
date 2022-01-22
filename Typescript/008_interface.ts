// Interface en typescript:
// Las interfaces en TypeScript son como las interfaces en JavaScript, pero con una diferencia:
// las interfaces en TypeScript tienen un constructor, que es el metodo que se ejecuta al crear una instancia de la interface.
interface Vehiculo{
    marca:string;
    readonly modelo:string; // Solo lectura (no se puede modificar)
    puertas?:number;    // ? indica que el atributo es opcional

    getMarca():string;
    getModelo():string;
    getPuertas():number;

    setMarca(marca:string):void;
    setModelo(modelo:string):void;
    setPuertas(puertas:number):void;

    acelearar():void;
    frenar():void;
}

//Interface de funciones
interface Funcion{
    (nombre:string,apellido:string):string;
}
let funcion:Funcion;
funcion = (nombre:string,apellido:string):string => {
    return `${nombre} ${apellido}`;
}
console.log(funcion('Juan','Perez'));

