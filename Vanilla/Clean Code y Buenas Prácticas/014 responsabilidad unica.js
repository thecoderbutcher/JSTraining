/* 
S: El principio de responsabilidad única:
Nunca debe haber más de una razón para cambiar una clase. En otras palabras, cada clase debe tener una sola responsabilidad.

O: El principio abierto-cerrado:
Las entidades de software, deben estar abiertas a la extensión, pero cerradas a la modificación.

L: El principio de sustitución de Liskov:
Las funciones que usan punteros o referencias a clases base deben poder usar objetos de clases derivadas sin saberlo.

I: El principio de segregación de interfaces:
Muchas interfaces específicas del cliente son mejores que una interfaz de propósito general.

D: El principio de inversión de dependencia:
Depende de abstracciones, no de concreciones. 
*/

// Sín princiopio de responsabilidad única
class UserSetting {
    constructor(user, settings) {
        this.user = user;
        this.settings = settings;
    }
    changeSetting(settings) {
        if (this.verifyCredencials()) {}
    }
    verifyCredencials() { }
}

// Con princiopio de responsabilidad única
class UserAuth {
    constructor(user) {
        this.user = user;
    }
    verifyCredencials() {
        return true;
    }
}

class UserSetting extends UserAuth {
    constructor(user, settings) {
        super(user)
        this.settings = settings;
    }
    changeSetting(settings) {
        if (this.verifyCredencials()) {
            console.log(`Puede modificar su configuración`);
        } else {
            console.log(`No tiene acceso.`);
        }
    }
}

const newAccess = new UserSetting('Alex', 'Dark Mode');
newAccess.changeSetting();