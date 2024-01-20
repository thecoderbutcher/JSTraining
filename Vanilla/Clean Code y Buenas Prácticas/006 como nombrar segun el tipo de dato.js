/* 
    Arrays: Plural.
    Booleanos: Con prefijos "is", "has" y "can". ("es verdadero", "tiene/contiene x", "puede hacer x").
    Números: Con prefijos "min", "max" y "total".
    Funciones: Verbo + sustantivo/s (ya que son acciones).
        ...de Acceso: get + sustantivo
        ...de Modificación: set + sustantivo;
        ...de Predicado: is + sustantivo;
    Clases: Sustantivos (no genéricos). 
*/

// Arrays: 
const users = ["Alex", "Mariana", "Jessica"];

//Booleanos:
const isValid = true;
const hasColor = true;
const canRead = false;

//Números:
const maxUsers = 50;
const minUsers = 10;
const totalUsers = 15;

//Funciones:
createUser();
updateUser();
sendEmail();
//Acceso:
getUser();
//Modificación:
setUser()
//Predicado:
isValidUser();

//Clases:
class User {}
class UserProfile {}
class Account {}