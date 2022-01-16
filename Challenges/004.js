// funcion que suma todos los argumentos sin importar la cantidad
let supersuma = function(){
    let result = 0
    for(let i= 0; i<arguments.length; i++){
        result += arguments[i]
    }
    return result
}
console.log(supersuma(3,5))         // 8
console.log(supersuma(4,5,7))       // 16
console.log(supersuma(7,5,3,9,4))   // 28