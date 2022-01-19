'use strict'
try {
    c = "text";
    console.log(c); // Error: c is not defined
}
catch (e) {
    console.log(e); // ReferenceError: c is not defined
}
finally { // Ejecutamos este bloque de codigo siempre.
    console.log("Termina la revision de errores");
}
console.log("sigue la ejecucion");

// Usando clausula throw
'use strict'
let result = 'lol';
try {
    if(isNaN(result)) throw 'result is not a number'        
    else if(result === '') throw 'result is empty'
    else if(result < 0) throw 'result is negative'
    else if(result > 100) throw 'result is greater than 100'
    else result = 'result is ok'
}
catch(e) {
    console.log(e); // result is not a number
}