//React es una libreria de JS, no es un framework
//React es declarativo, por lo tanto es mas predecible, facil de depurar por otros desarrolladores. Podemos crear nuestros propios tags

/* Ejemplo
    <Container>
        <searchBar />
        <MyOwnComponent />
    </Container>
*/

// React es basado en componentes, por lo tanto, cada componente es una funcion que retorna un elemento
// React es unicamente para desarrollar interfaces de usuario, no para crear aplicaciones complejas. Puede ser utilizado o combinado con otros frameworks

// Virtual dom es una representacion en memoria del dom real del navegador. Actua como intermediario entre el estado de la aplicacion y la UI que esta viendo el usuario

//Reconciliacion es como una comparacion entre el virtual dom y el real dom, y si hay cambios, se actualiza la UI
//Es como react manipula y actualiza los componentes, Para ello se utiliza una libreria llamada reconciler, algoritmo diferecial que actualiza los elementos del arbol de tu aplicacion
//Fiber: son objetos que se utilizan para la actualizacion de la UI, se crean en el render y se agregan a la cola de actividades, 
//Son internos a React y mantienen informacion del arbol de componentes, como el estado, el contexto, el padre, etc.
