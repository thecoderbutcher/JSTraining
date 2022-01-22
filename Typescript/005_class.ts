// Clases en TypeScript:
// Las clases en TypeScript son como las clases en JavaScript, pero con una diferencia:
// las clases en TypeScript tienen un constructor, que es el metodo que se ejecuta al crear una instancia de la clase.
class Vehiculo{
    marca:string;
    modelo:string;
    puertas:number;
    
    constructor(marca:string,modelo:string,puertas:number){
        this.marca = marca;
        this.modelo = modelo;
        this.puertas = puertas;
    }

    getMarca():string{return this.marca;}
    getModelo():string{return this.modelo;}
    getPuertas():number{return this.puertas;}

    setMarca(marca:string):void{this.marca = marca;}
    setModelo(modelo:string):void{this.modelo = modelo;}
    setPuertas(puertas:number):void{this.puertas = puertas;}

    acelearar():void{
        console.log(`Acelerando...`);
    }

    frenar():void{
        console.log(`Frenando...`);
    }
}

let vehiculo = new Vehiculo('Ford','Focus',4);
console.log(vehiculo.getMarca());
console.log(vehiculo.getModelo());
console.log(vehiculo.getPuertas());
console.log(vehiculo.acelearar());