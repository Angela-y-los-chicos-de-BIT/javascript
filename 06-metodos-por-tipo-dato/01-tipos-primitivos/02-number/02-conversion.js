/** Conversión a otros tipos */

/** Number(): 
 *  Convierte un valor a un número (si es posible). */
let cadena = "42";
value = Number( cadena );      
console.log( value );          // 42

let booleano = true;
value = Number( booleano );      
console.log( value );          // 1

/** parseInt():
 *  Conversión de una cadena a un número entero */
cadena = "42";
value = parseInt( cadena );      
console.log( value );           // 42

/** De decimal a entero */
let decimal = 42.76;
value = parseInt( cadena );      
console.log( value );           // 42

/** De binario a entero */
let binario = '1111';
value = parseInt( binario, 2 );      
console.log( value );           // 15

/** De octal a entero */
let octal = '17';
value = parseInt( octal, 8 );      
console.log( value );           // 15

/** De hexadecimal a entero */
let hexadecimal = 'f';
value = parseInt( hexadecimal, 16 );      
console.log( value );           // f

let ancho = "123.45px";
let numero = parseInt( ancho );
console.log( numero );    // 123

/** parseFloat():
 *  De cadena a decimal */
cadena = "42.1";
value = parseFloat( cadena );      
console.log( value );           // 42.1

/** De binario a decimal */
binario = '1111.1001100110011001100110011001100110011001100110011';
value = parseFloat( binario, 2 );      
console.log( value );           // 1111.100110011001

/** De octal a decimal */
octal = '17.46314631463146314';
value = parseFloat( octal, 8 );      
console.log( value );           // 17.463146314631462

/** De hexadecimal a decimal ---> No es la funcion adecuada */
hexadecimal = 'f.9999999999998';
value = parseFloat( hexadecimal, 16 );      
console.log( value );           // NaN

/** Ignorar caracteres no numericos */
ancho = "123.45px";
numero = parseFloat( ancho );
console.log( numero );    // 123.45