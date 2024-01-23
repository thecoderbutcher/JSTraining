/* 
API REST 🌐
API: Application Program Interface -> Interfaz Una interfaz es el medio por el cual la computadora se conecta con los humanos. 
Es lo visible para el usuario que interactúe con una app, por ejemplo.

API REST Es el medio por el cual se comunican computadoras con otras computadoras. O también podemos pensarlo como robots con robots 🤖🔁🤖. 
Puede ser backend con frontend, backend con backend, etc.

REST: Representational State Transfer

A diferencia de una página web, que se muestra con imágenes, textos formateados, etc.; la llamada de una API REST se devuelve en un archivo JSON.

Aunque pocas, algunas aplicaciones todavía usan el método SOAP para mandar información entre computadoras. 
Sin embargo, actualmente REST está dominando su aplicación. 
*/

/**
 * Principios de diseño de REST
En el nivel más básico, una API es un mecanismo que permite que una aplicación o servicio acceda a un recurso dentro de otra aplicación o servicio. 
La aplicación o servicio que realiza el acceso se llama cliente y la aplicación o servicio que contiene el recurso se llama servidor.

Algunas API, como SOAP o XML-RPC, imponen un marco estricto a los desarrolladores. 
Pero las API REST se pueden desarrollar utilizando prácticamente cualquier lenguaje de programación y admiten una variedad de formatos de datos. 
El único requisito es que se alineen con los siguientes seis principios de diseño de REST, también conocidos como restricciones de arquitectura:

    Interfaz uniforme. Todas las solicitudes de API para el mismo recurso deben tener el mismo aspecto, sin importar de dónde provenga la solicitud. 
    La API REST debe garantizar que el mismo dato, como el nombre o la dirección de correo electrónico de un usuario, pertenezca a un solo identificador uniforme de recursos (URI). 
    Los recursos no deben ser demasiado grandes, pero deben contener toda la información que el cliente necesite.

    Desacoplamiento cliente-servidor. En el diseño de API REST, las aplicaciones de cliente y servidor deben ser completamente independientes entre sí. 
    La única información que debe conocer la aplicación del cliente es el URI del recurso solicitado; no puede interactuar con la aplicación del servidor de ninguna otra manera. 
    De manera similar, una aplicación de servidor no debería modificar la aplicación del cliente además de pasarla a los datos solicitados a través de HTTP.

    Sin estado. Las API REST no tienen estado, lo que significa que cada solicitud debe incluir toda la información necesaria para procesarla. En otras palabras, 
    las API REST no requieren ninguna sesión del lado del servidor. Las aplicaciones de servidor no pueden almacenar ningún dato relacionado con la solicitud de un cliente.

    Capacidad de caché. Cuando sea posible, los recursos deben almacenarse en la memoria caché en el lado del cliente o del servidor. 
    Las respuestas del servidor también deben contener información sobre si se permite el almacenamiento en caché para el recurso entregado. 
    El objetivo es mejorar el rendimiento en el lado del cliente, mientras aumenta la escalabilidad en el lado del servidor.

    Arquitectura del sistema en capas. En las API REST, las llamadas y respuestas pasan por diferentes capas. 
    Como regla general, no asuma que las aplicaciones cliente y servidor se conectan directamente entre sí. 
    Puede haber varios intermediarios diferentes en el bucle de comunicación. 
    Las API REST deben diseñarse de modo que ni el cliente ni el servidor puedan saber si se comunican con la aplicación final o con un intermediario.

    Código bajo demanda (opcional). Las API REST generalmente envían recursos estáticos, pero en ciertos casos, 
    las respuestas también pueden contener código ejecutable (como los subprogramas de Java). En estos casos, el código solo debe ejecutarse bajo demanda.



Flujo de comunicación entre usuarios, frontend y backend
SSR
La representación del lado del servidor se refiere a la capacidad de una aplicación para mostrar la página web en el servidor en lugar de mostrarla en el navegador. 
Cuando el JavaScript de un sitio web se procesa en el servidor del sitio web, se envía una página completamente procesada al cliente y el paquete de JavaScript 
del cliente se activa y permite que funcione el marco de la aplicación de una sola página.

https://assets-global.website-files.com/620d42e86cb8ec4d0839e59d/6230e9ad9a22b134ae9eceb8_61cb64ed587c1111fb1dc917_SSR-server-side-rendering-infographic.png

SPA (aplicación de una sola página)
Una SPA (aplicación de una sola página) es una implementación de aplicación web que carga solo un único documento web y luego actualiza el contenido del cuerpo 
de ese documento único a través de las API de JavaScript, como XMLHttpRequest o fetch y se muestra contenido diferente.

Por lo tanto, esto permite a los usuarios usar sitios web sin cargar páginas completamente nuevas desde el servidor, 
lo que puede generar mejoras en el rendimiento y una experiencia más dinámica, con algunas desventajas como el SEO, se requiere más esfuerzo para mantener el estado, 
implementar la navegación y lograr un rendimiento significativo. vigilancia.

*/