/** Reemplazar texto */
let texto = "JavaScript a ti todo te lo debo. Gracias JavaScript por los favores recibidos";
let nuevoTexto;

/** replace(subcadena, nuevaSubcadena): 
 * Reemplaza la primera aparición de una subcadena por otra. */
nuevoTexto = texto.replace( 'JavaScript', 'Python' ) ;    // Python a ti todo te lo debo. Gracias JavaScript por los favores recibidos
console.log( nuevoTexto );

nuevoTexto = texto.replace( 'todo te lo debo. ', '' ) ;    // JavaScript a ti Gracias JavaScript por los favores recibidos
console.log( nuevoTexto );