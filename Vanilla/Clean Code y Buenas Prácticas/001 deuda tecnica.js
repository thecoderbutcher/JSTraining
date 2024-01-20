/**
 * Deuda tecnica y Refactorizacion de código
Nuuestro código debe ser simple y directo, debería leerse con la misma facilidad que un texto bien escrito.

Tipos de deuda técnica:
    Imprudente y deliberada -> Se da cuando el desarrollador actua de manera consciente e imprudente, ya que no toma cuenta el factor del error en el código.
    Imprudente e inadvertida -> No se sabe que se esta dejando un error ya que no se posee los conocimientos
    Prudente y deliberada -> Se tiene el 100% de consciencia que se esta dejando la deuda y se tiene la promesa que se va a pagar.
    Prudente e inadvertida -> Es la mas comun, se obtiene cuando se tiene la idea que el desarrollo es el mas eficiente pero se llega a discusión que se podia realizar ciertas mejoras

¿Cómo pagar las deudas?
Refactorizando el código, esto es mejorar el código sin alterar su comportamiento para que sea mas entendible y tolerante a cambios.
Y es importante que el código tenga tests ( units o integration tests ) automáticos que validen el comportamiento del código.( Para no romperlo )

¿Cuándo refactorizar?
Cuando hay código de baja calidad ( duplicación de código, funciones con mas de una acción) o se detecta cualquier otro tipo de code smell 
( código duplicado, métodos o clases demasiado grandes y complejos, falta de cohesión entre diferentes partes del código, uso excesivo de condicionales y bucles anidados, por ej.)
 */