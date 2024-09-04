/** Redondeo y formato */
let numero;


/** toFixed(digitos): 
 * Redondea un número a un número específico de decimales y lo devuelve como una cadena. */
numero = 3.14159;
let redondeado = numero.toFixed( 2 );       // "3.14"


/** toPrecision(precision): 
 * Redondea un número a una precisión específica (número total de dígitos significativos) y lo devuelve como una cadena. */
numero = 1234.5678;
let precision = numero.toPrecision( 4 );     // "1235"

/** toString(): 
 * Convierte un número a una cadena. Puedes especificar una base numérica (por ejemplo, 2 para binario, 16 para hexadecimal). */
numero = 15;
let cadena = numero.toString(); 
console.log( cadena );                  // "15"

let binario = numero.toString( 2 );     
console.log( binario );                 // "1111"

let octal = numero.toString( 8 );       
console.log( octal );                   // "17"

let hexadecimal = numero.toString( 16 ); 
console.log( hexadecimal );             // "f"