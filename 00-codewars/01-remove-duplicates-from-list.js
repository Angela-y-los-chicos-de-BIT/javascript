// 1. Remove duplicates from list

// Description:
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

/** Paso 1: 
 *  Crear una lista para chequear que valores ya tenemos en la nueva lista */
// const checkList = {
//     1: true,
//     2: true,
//     3: true
// };

/** Paso 2:
 * Agregar a la lista esos elementos que no se repiten
 */

// Version 1

const nums = [ 1, 2, 1, 1, 3, 2 ];
const checkList = {};
let newList = [];

for ( const value of nums ) {
    if( ! checkList[ value ] ) {
        checkList[ value ] = true;
        newList = [ ...newList, value ];
    }
}

console.log( newList );
