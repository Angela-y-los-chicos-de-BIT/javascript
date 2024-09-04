// 11. Completa el siguiente programa e imprime la cantidad de unos (1) que haya en el arreglo:

const nums = [ 1, 0, 1, '1', 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1 ];

// El resultado debería ser el siguiente:

// 11
// NOTA: este ejercicio lo debes hacer con ciclos y sin ayuda de la función filter de JavaScript. Al terminarlo, cambia el arreglo original para verificar que funcione con otras combinaciones de ceros y unos.

// let suma = 0;

// let i = 0;
// while( i < nums.length ) {
//     if( nums[ i ] == 1 ) {
//         suma += nums[ i ];
//     }

//     i++;
// }

// console.log( suma );

// Version: Camilo & David (Financiero)
const newList = [];
for ( const value of nums ) {
    // == igualdad ---> valor
    // === igualdad extricta ---> valor luego tipo
    if( value === 1 ) {
        newList.push( value );
    }
}

console.log( 'La cantidad de #s 1 es: ' + newList.length );