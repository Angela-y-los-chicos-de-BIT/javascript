/** Acceder a los valores de una lista 
 * Recordemos que:
 * 1. Aunque JavaScript denomina a este tipo de dato como un Array en realidad su comportamiento es como una lista 
 * 2. El índice de una lista es el número que identifica la posición del campo que posee un valor en la lista
 * 3. Cada campo puede tener dentro de si cualquier tipo de datos tanto primitivo como complejo
 * 4. El primer campo de una lista es el campo 0 CERO y el siguiente será el úno y así hasta llegar a su último elemento
 * 5. Teniendo en cuenta lo anterior la lista que posee 5 elementos tiene como indice en su último campo el indice número 4
 * */

/** Definir una lista a partir de su clase global */
const numeros = new Array();
numeros[ 0 ] = 9;
numeros[ 2 ] = 4;
numeros[ 3 ] = 5;
numeros[ 0 ] = 999;

console.log( numeros );         // Mostrará  --->  (4) [999, empty, 4, 5]

/** Definir una lista de forma literal */
const listaNotas = [ 3.4, 5.0, 3.2, 4.5, 1.2 ];         // Note que el operador decimal es determinado por el punto, cada elemento se separa con una coma

/** Acceder a un valor de la lista
 *  Para ello podemos usar dos tipos de sintáxis, indicando el número del indice al que deseamos acceder
 */

console.log( listaNotas );              // Mostrará toda la lista completa  --->  (5) [ 3.4, 5.0, 3.2, 4.5, 1.2 ]
console.log( listaNotas[ 0 ] );         // Mostrará el valor de la primera posicion de la lista  --->  3.4
console.log( listaNotas[ 3 ] );         // Mostrará  --->  4.5
console.log( listaNotas[ listaNotas.length - 1 ] );   // Mostrará último valor de la lista  --->  1.2


/** Modificar valores de la lista */
listaNotas[ 4 ] = 3.5;                  // Modificamos el último valor de la lista de 1.2 a 3.5
console.log( listaNotas );              // Mostrará toda la lista completa  --->  (5) [ 3.4, 5.0, 3.2, 4.5, 3.5 ]

/** Agregemos valores a la lista en posiciones no existentes */
listaNotas[ 6 ] = 1.3;
console.log( listaNotas );              // Mostrará toda la lista completa  --->  (7) [ 3.4, 5.0, 3.2, 4.5, 3.5, empty, 1.3 ]

/** Una lista en JavaScript soporta todo tipo de datos, tanto primitivos como complejos */
const lista = [ 'Hola', 9, true, Symbol( 'Manu' ), '45', false, 3.1415, { name: 'Sofia', age: 62 }, null, [ undefined, NaN, null ] ];
console.log( lista );