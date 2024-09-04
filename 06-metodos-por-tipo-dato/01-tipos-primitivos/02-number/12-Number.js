/** Clase Number
 *  1. Realizar operaciones matemáticas complejas o dar formato a números
 *  2. Verificar si un valor es un número valido
 *  3. Convertir valores de otros tipos a numeros
 * 
 *  Consideraciones:
 *  - Precisión: 
 *      JavaScript utiliza representación de punto flotante de 64 bits IEEE 754, lo que puede llevar a pequeñas imprecisiones en cálculos con números de punto flotante.
 *  - BigInt: 
 *      Para trabajar con números enteros muy grandes, utiliza el tipo BigInt.
 */


/** Convierte un valor a un número (si es posible). */
let numero = Number( "100" );
console.log( numero, typeof numero );   //  100 number

/** Number.isInteger(): 
 *  Determina si un valor es un número entero. */
let value = Number.isInteger( 3.14 ); 
console.log( value );                   // false

/** Number.isNaN(): 
 * Determina si un valor es NaN (Not a Number). */
value = Number.isNaN( 'juan' ); 
console.log( value );                   // true

/** Number.isFinite(): 
 * Determina si un valor es un número finito. */
numero = 9/0;
value = Number.isFinite( numero ); 
console.log( value );                   // false

numero = 0;
value = Number.isFinite( numero );      
console.log( value );                   // true

numero = -9/0;
value = Number.isFinite( numero );      
console.log( value );                   // false

/********* Operaciones matemáticas (estáticas) *********/
/** Math.round(): 
 *  Redondea un número al entero más cercano. */
numero = 3.7;
value = Math.round( numero ); 
console.log( value );               // 4

/** Math.floor(): 
 *  Redondea un número hacia abajo al entero más cercano. */
value = Math.floor( numero ); 
console.log( value );               // 3

/** Math.ceil(): 
 *  Redondea un número hacia arriba al entero más cercano. */
value = Math.ceil( numero ); 
console.log( value );

/** Math.random(): 
 *  Genera un número aleatorio entre 0 (inclusive) y 1 (exclusivo). */
value = Math.random();
console.log( value );
value = Math.random();
console.log( value );