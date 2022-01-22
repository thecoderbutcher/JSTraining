// Herencia
class Padre{
    public nombre:string;
    
    constructor(nombre:string){
        this.nombre = nombre;
    }
    public saludar():void{
        console.log("Hola, soy " + this.nombre);
    }
}
class Hijo extends Padre{
    public apellido:string;
    
    constructor(nombre:string,apellido:string){
        super(nombre);
        this.apellido = apellido;
    }
    public saludar():void{
        console.log("Hola, soy " + this.nombre + " " + this.apellido);
    }
}
let hijo = new Hijo('Juan','Perez');
hijo.saludar();
