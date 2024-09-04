/** De hexadecimal a entero */
hexadecimal = 'f.9999999999998';

// Separar parte entera y parte fraccionaria
let puntoDecimal = hexadecimal.indexOf('.');
let parteEntera = hexadecimal.substring(0, puntoDecimal);
let parteFraccionaria = hexadecimal.substring(puntoDecimal + 1);

// Convertir parte entera a entero
let entero = parseInt(parteEntera, 16);

// Convertir parte fraccionaria a decimal
let decimal = parseInt(parteFraccionaria, 16) / Math.pow(16, parteFraccionaria.length);

// Sumar parte entera y parte fraccionaria
let valor = entero + decimal;

console.log(valor);         // 15.9999999999998