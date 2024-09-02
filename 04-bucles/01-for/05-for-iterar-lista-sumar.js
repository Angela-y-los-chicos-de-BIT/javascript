/* Ejemplo 1: Iterar elementos de una lista */
const numeros = [ 3.4, 8, 11, 2, 11 , 9.2, 7 ];
let suma = 0;

for( let i = 0; i < list.length; i++ ) {
    suma = suma + numeros[ i ];     // Equivale a: suma += numeros[ i ];
}

console.log( 'Total de la suma: ', suma );