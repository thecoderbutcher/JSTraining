/*
* Funciones puras :En las funciones puras, dada una misma entrada (input), 
obtendremos una misma salida (output). Por otro lado, las funciones puras no tienen efectos secundarios (side effects).

Side Effect
1 Modificar variables globales
2 Modificar parametros
3 Solicitudes HTTP
4 Imprimir mensajes en pantallas o consola
5 Manipulacion del DOM
6 Obtener la hora actual
*/
function sum(a, b){ return a + b}

/*
La distinción entre funciones puras e impuras es importante para escribir código más mantenible, 
predecible y testeable. Las funciones puras facilitan la comprensión del código y reducen la posibilidad de errores, 
ya que no introducen sorpresas relacionadas con cambios de estado externo.
*/