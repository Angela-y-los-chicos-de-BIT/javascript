/** Manipulando espacios en blanco */
let texto = "   JavaScript es mi pastor nada me falta ";
let textoSinEspacios;

/** trim(): 
 * Elimina los espacios en blanco al principio y al final de la cadena. */
textoSinEspacios = texto.trim();        
console.log( textoSinEspacios );    // "JavaScript es mi pastor nada me falta"

/** trimStart() o trimLeft(): 
 * Elimina los espacios en blanco al principio de la cadena. */
textoSinEspacios = texto.trimStart();        
console.log( textoSinEspacios );    // "JavaScript es mi pastor nada me falta "

textoSinEspacios = texto.trimLeft();        
console.log( textoSinEspacios );    // "JavaScript es mi pastor nada me falta "

/** trimEnd() o trimRight(): 
 * Elimina los espacios en blanco al final de la cadena. */
textoSinEspacios = texto.trimEnd();        
console.log( textoSinEspacios );    // "   JavaScript es mi pastor nada me falta"

textoSinEspacios = texto.trimRight();        
console.log( textoSinEspacios );    // "   JavaScript es mi pastor nada me falta"