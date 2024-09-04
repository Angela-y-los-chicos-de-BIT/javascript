/** Extraer subcadenas */
let texto = "JavaScript es mi pastor nada me falta";
let subcadena = '';

/** slice(inicio, fin): 
 * Extrae una porción de la cadena desde el índice de inicio (incluido) hasta el índice de fin (excluido). */
subcadena = texto.slice( 0, 11 );           // subcadena = JavaScript
console.log( subcadena );

subcadena = texto.slice( 17, 23 );          // subcadena = pastor
console.log( subcadena );

/** substring(inicio, fin): 
 * Similar a slice, pero los índices no pueden ser negativos. */
subcadena = texto.substring( 11 ); // subcadena será "es genial"
console.log( subcadena );