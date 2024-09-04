//** Información sobre el número */

/** isNaN(): 
 * Determina si un valor es NaN (Not a Number). */
let value = 'Hola';
let resultado = isNaN( value );
console.log( resultado );       // true

value = 9;
resultado = isNaN( value );         
console.log( resultado );       // false

/** isFinite(): 
 * Determina si un valor es un número finito (no es infinito ni NaN). */
value = Infinity;
resultado = isFinite( value );
console.log( resultado );       // false

value = 9/0;
resultado = isFinite( value );
console.log( resultado );       // false

/** isInteger(): 
 * Determina si un valor es un número entero. */
value = 3.1415;
resultado = Number.isInteger( value ); 
console.log( resultado );       // false