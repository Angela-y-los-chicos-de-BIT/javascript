// 8. Crea un programa a partir de las siguientes instrucciones:

// Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos: "Pedro", "Pablo", "María", "Juan", "Diana".
// Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1.
// Pídele al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con este valor.
// Recorre el arreglo e imprímelo.
// Un ejemplo de cómo se comportaría el programa en la consola sería el siguiente:
//     Ingresa un nombre > Camilo
//     Ingresa otro nombre > Ariel
//     Pedro
//     Pablo
//     Ariel
//     Juan
//     Diana
//     Camilo

let nombres = [ "Pedro", "Pablo", "María", "Juan", "Diana" ];

let nombre = prompt( 'Digita un nombre' );
nombres = [ nombre, ...nombres ];      // ECMAScript 2015 ---> Spread  ---> ...
console.log( nombres );

nombre = prompt( 'Digita un nuevo nombre' );
nombres.splice( 2, 1, nombre );         // ! Tarea: Capturar la posicion a cambiar validando la longitud de la lista 
console.log( nombres );