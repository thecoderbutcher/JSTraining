/**
 * Cuando debemos buscar elementos en un array un metodo eficiente es indexar los elementos
 * 
 */
let users = []

for(let i=9999; i>0; i--){
    users[i] = {
        id: i,
        name: Math.random().toString(),
    } 
}

const lista = [];

for(let i= 0; i<10000; i++){
    lista[i] = {
        id: i,
        name: Math.random(),
        created_by: Math.floor(Math.random()*1000),
    }
}

// Agregar una propiedad mas llamado created_by_user
// Como no hacerla
console.time('usando find')

const conUser = lista.map(elemento => {
    return{
        ...elemento,
        created_by_user: users.find(u => u.id === elemento.created_by) 
    }
    
})
console.timeEnd('usando find')

/**
 * Mejor Metodo usando indexacion con reduce
 */
const usersIndexado = users.reduce((acc, el) =>{
    acc[el.id] = el
    return acc
}, {}) 

const conUserIndex = lista.map(elemento => {
    return {
        ...elemento,
        created_by_user: usersIndexado[elemento.created_by]
    }
})