interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;
let pet = getSmallPet();

function isFish(pet: Fish | Bird): pet is Fish{ //typeguard de typescript 
    return (pet as Fish).swin !== undefined;    
}

if(isFish(pet)){
    pet.swim();
}else{
    pet.fly();
}

// type vs interface  diferencias
interface Animal {
    name: string;
}
//heredando 
interface Tiger extends Animal{
    gender:string;
}
let tiger:Tiger = {

}

type Animal2 = {
    name: string;
}

//heredando
type Tiger2 = Animal2 & {
    gender:string
}

//Tipo Utilitario
interface Todo{
    title: string;
    description: string;
}

type ParcialTodo = Partial<Todo>; // Parametros opcional
type ReadOnlyTodo = Readonly<Todo> // Solo lectura

type T = NonNullable<string | number | null | undefined> /// tipo que no puede ser nulo
type RequiredTodo = Required<Todo> // Parametros obligatorios
