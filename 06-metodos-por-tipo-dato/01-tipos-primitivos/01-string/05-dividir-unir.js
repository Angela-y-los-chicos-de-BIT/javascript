/** Dividir y unir cadenas */
let texto = 'manzana,banana,pera';
let frutas;

console.log( texto );

/** split(separador): 
 * Divide una cadena en un array de subcadenas, utilizando un separador especificado. */
frutas = texto.split( ',' );
console.log( frutas );          //  [ 'manzana', 'banana', 'pera' ]

/** join(separador): 
 * Une los elementos de un array en una cadena, utilizando un separador especificado. */
texto = frutas.join( '-' );     // texto será "manzana-banana-pera"
console.log( texto );