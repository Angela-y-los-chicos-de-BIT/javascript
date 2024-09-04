// 1. Remove duplicates from list

// Description:
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

// Version: David Santiago

const numeros = [ 1, 2, 1, 1, 3, 2 ];
const numerosUnicos = [];

for ( let i = 0; i < numeros.length; i++ ) {
    let esDuplicado = false;

    for ( let j = 0; j < numerosUnicos.length; j++ ) {
        if ( numeros[ i ] == numerosUnicos[ j ] ) {
            esDuplicado = true;
        }
    }

    if ( esDuplicado == false ) {
        numerosUnicos.push( numeros[i] );
    }
}

console.log( numerosUnicos );