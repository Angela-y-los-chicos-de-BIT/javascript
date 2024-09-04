/** Encontrar una subcadena */
let texto = "JavaScript es mi pastor nada me falta.";
let value;

/** startsWith(subcadena): 
 * Determina si una cadena comienza con otra subcadena. */
value = texto.startsWith( 'javascript' );
console.log( value );                   // false
value = texto.startsWith( 'JavaScript' );
console.log( value );                   // true

/** endsWith(subcadena): 
 * Determina si una cadena termina con otra subcadena. */
value = texto.endsWith( '.' );
console.log( value );                   // true
value = texto.startsWith( 'lindo' );
console.log( value );                   // false

/** includes(subcadena): 
 * Determina si una cadena contiene otra subcadena. */
value = texto.includes( 'NADA' ); 
console.log( value );                   // false
value = texto.includes( 'nada' );    
console.log( value );                   // true