// 9. Escribe un programa que:

// Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
// Elimine el segundo elemento.
// Recorra e imprima el arreglo.

const numeros = [];
const numero = parseInt( prompt( 'Digita un numero ' ) );

for( let i = 1; i <= numero; i++ ) {
    numeros = [ ...numeros, i ];        // Spread  --->  ...
}

numeros.splice( 1, 1 );

for( let i = 0; i < numeros.length; i++ ) {
    console.log( numeros[ i ] );
}


