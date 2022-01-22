// Intersecciones de tipo en typescript
interface Bird {
    fly(): void;
    layEggs(): void;
}
interface Fish {
    swim(): void;
    layEggs(): void;
}

declare function getSmallPet(): Fish | Bird  //Declare es una palabra reservada que indica que la funcion getSmallPet() puede devolver un objeto de tipo Fish o Bird

const pet = getSmallPet();
pet.layEggs();
// pet.swim(); // Error, no se puede acceder a la propiedad swim() porque no es una propiedad de Bird o Fish

// Uniones de tipo en typescript
type Person = {
    name: string;
    lastName: string;
}
type Client = {
    clientNumber: number;
}

type Employee = Person & Client;
let employee: Employee;
employee.name;
employee.lastName;
employee.clientNumber; // Puedo acceder a todos los atributos gracias a la union de tipos

