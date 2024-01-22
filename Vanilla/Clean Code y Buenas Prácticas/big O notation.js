/* 
La Big O notation o también conocida como la notación Big O es la expresión matemática de cuánto se tarda en ejecutar un algoritmo 
en función de la longitud de entrada, normalmente hablando del peor de los casos.

En la práctica se utiliza Big O para clasificar los algoritmos en función de cómo responden a los cambios en el tamaño de la entrada, 
por lo que los algoritmos con la misma tasa de crecimiento se representan con la misma notación. 
El uso de la letra O es porque la tasa de crecimiento de una función también se llama orden de la función.

Conocer Big O ayuda y facilita tu trabajo como desarrolladora al ser consciente de la eficiencia de un algoritmo que se traduce en poder crear aplicaciones con un buen rendimiento.

Ahora exploremos los tipos más comunes de Big O al utilizar JavaScript +ES6.

Algoritmo de tiempo constante: O(1)
Este algoritmo es de orden uno y en este orden, independientemente de la complejidad, o sea, el número de elementos, el tiempo es constante.

Esto se puede observar en los algoritmos que devuelven un elemento en una posición ya conocida de un array sin importar el tipo o la longitud.

Código: */

const getLast = items => items[items.length-1];

/* Implementación: */
getLast(['a', 'b', 'c', 'd']); //> d(1 iteración)
getLast(['a', 'b', 'c', 'd', 'e', 'f', 'g']); //> g(1 iteración)

/* Algoritmo de tiempo lineal: O(N)
En este tipo de algoritmos, el tiempo en el peor de los casos crece a la par que el número de elementos. 
Es decir, para N elementos se necesitarán N iteraciones.

Código:
 */

const findIndex = (items, match) => {
    for (let i = 0, total = items.length; i < total; i++)
        if (items[i] == match)
            return i;
    return -1;
};

/* Implementación: */

const array= ['a', 'b', 'c', 'd'];
findIndex(array, 'a'); // 0  (1 iteración)
findIndex(array, 'd'); // 3  (4 iteraciones)
findIndex(array, 'e'); // -1 (4 iteraciones)
/* 
Algoritmo de tiempo cuadrático: O(N²)
En este tipo de algoritmo, el tiempo en el peor de los casos es el cuadrado del número de entradas. 
Esto quiere decir que el tiempo crece exponencialmente en relación con el número de entradas.

Código:
 */
const buildSquareMatrix = items => {
    let matrix = [];
    for (let i = 0, total = items.length; i < total; i++){ 
        matrix[i] = [];
        for (let j = 0, total = items.length; j < total; j++)
            matrix[i].push(items[j]);
    }
    return matrix;
};
/* Implementación: */

buildSquareMatrix(['a', 'b', 'c']); 

/* 9 iteraciones para 3 elementos, retorna:
[
  ['a', 'b', 'c'],
  ['a', 'b', 'c'],
  ['a', 'b', 'c']
]
/*
Algoritmo de tiempo logarítmico: O(n log n)
Si se trabaja con algoritmos de búsqueda y ordenación, el enfoque suele buscar ser más eficiente cuando se trata de grandes colecciones. 
En lugar de buscar los elementos uno por uno, se divide los datos y se descartan muchos datos en cada iteración, por lo general la mitad o log base 2.

Si consideramos que estamos un orden log base 2, se podría idealmente encontrar un elemento específico en una colección de un millón de elementos con menos de 20 iteraciones, 
si se escala el tamaño de la colección a mil millones, entonces se requerían menos de 30 iteraciones.

Si eres una entusiasta del big data, entonces será fácil que imagines la ventaja que tienen este tipo de algoritmos, 
ya que cuanto mayor sea la colección, mayor será la eficiencia relativa que proporcionen.

Entre estos algoritmos, el más popular que podemos encontrar es el de Quicksort, el cual puede utilizarse para encontrar un elemento específico y ordenar una lista de 
forma muy eficiente.

Código:
*/
const quickSort = list => {
    if (list.length < 2) 
        return list;
    let pivot = list[0];
    let left  = []; 
    let right = [];
    for (let i = 1, total = list.length; i < total; i++){
        if (list[i] < pivot)
            left.push(list[i]);
        else
            right.push(list[i]);
    }
    return [
        ...quickSort(left), 
        pivot, 
        ...quickSort(right)
    ];
};
Implementación:

quickSort( ['q','a','z','w','s','x','e','d','c','r']);
// ["a", "c", "d", "e", "q", "r", "s", "w", "x", "z"]