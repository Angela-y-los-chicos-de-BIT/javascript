/** Obteniendo información sobre los caracteres */
let texto = "JavaScript es mi pastor nada me falta";

/** length: 
 * Devuelve la longitud de la cadena (número de caracteres). */
const longitud = texto.length;
console.log( longitud );                    // 37

/** charAt(indice): 
 * Devuelve el carácter en un índice específico. */
let indiceCaracter = texto.charAt( 0 );     // J
console.log( indiceCaracter );

indiceCaracter = texto.charAt( 9 );         // t
console.log( indiceCaracter );

/** charCodeAt(indice): 
 * Devuelve el código Unicode del carácter en un índice específico. */
let unicode = texto.charCodeAt( 0 );            // 74
console.log( unicode );

unicode = texto.charCodeAt( 9 );                // 116
console.log( unicode );