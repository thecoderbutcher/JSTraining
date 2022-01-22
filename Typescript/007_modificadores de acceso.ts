// Tipo de modificadores de acceso en typescript:
// public: se puede acceder desde cualquier parte del codigo
// private: se puede acceder desde la clase o desde la misma clase
// protected: se puede acceder desde la clase o desde la misma clase o desde una clase que herede de esta

class Animal{
    public nombre:string;
    private edad:number;
    protected tipo:string;
    
    constructor(nombre:string,edad:number,tipo:string){
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }
    
    public getEdad():number{return this.edad;} // Se puede acceder desde cualquier parte del codigo
    private setEdad(edad:number):void{this.edad = edad;} // Solo se puede acceder desde la clase
    protected getTipo():string{return this.tipo;} // Se puede acceder desde la clase o desde la misma clase o desde una clase que herede de esta
}