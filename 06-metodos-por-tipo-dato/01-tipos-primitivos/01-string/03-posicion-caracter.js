/** Buscar dentro de una cadena */
let texto = "JavaScript es mi pastor nada me falta";
let indice;


/** indexOf(subcadena): 
 * Devuelve el índice de la primera aparición de una subcadena dentro de la cadena. Si no se encuentra, devuelve -1. */
indice = texto.indexOf( 'JavaScript' );    //   0
console.log( indice );

indice = texto.indexOf( 'mi pastor' );     //   14
console.log( indice );

indice = texto.indexOf( 'Java' );           //  0
console.log( indice );

indice = texto.indexOf( 'Python' );         //  -1
console.log( indice );


/** lastIndexOf(subcadena): 
 * Devuelve el índice de la última aparición de una subcadena. */
texto = "JavaScript a ti todo te lo debo. Gracias JavaScript por los favores recibidos";

indice = texto.lastIndexOf( 'JavaScript' );     //  41
console.log( indice );

indice = texto.lastIndexOf( 'lo' );             //  56
console.log( indice );


