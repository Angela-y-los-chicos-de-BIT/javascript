/** Conversion a cadena */

/** String(): 
 * Convierte un valor a una cadena. */
let numero = 42;
value = String( numero ); 
console.log( value );           // "42"


/** toString(): 
 * Convierte un número a una cadena. Puedes especificar una base numérica. */
numero = 15;
let entero = numero.toString(); 
console.log( entero );                  // "15"

numero = 15.6;
let decimal = numero.toString(); 
console.log( entero );                  // "15"

/** De cadena a binario */
numero = 15;
let binario = numero.toString( 2 ); 
console.log( binario );                 // "1111"

numero = 15.6;
binario = numero.toString( 2 ); 
console.log( binario );                  // "1111.1001100110011001100110011001100110011001100110011"

/** De cadena a octal */
numero = 15;
let octal = numero.toString( 8 ); 
console.log( octal );                   // "17"

numero = 15.6;
octal = numero.toString( 8 ); 
console.log( octal );                   // "17.46314631463146314"

/** De cadena a hexadecimal */
numero = 15;
let hexadecimal = numero.toString( 16 ); 
console.log( hexadecimal );              // "f"

numero = 15.6;
hexadecimal = numero.toString( 16 ); 
console.log( hexadecimal );              // "f.9999999999998"
