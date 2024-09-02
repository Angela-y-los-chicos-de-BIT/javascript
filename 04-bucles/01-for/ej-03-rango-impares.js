/** Generar un rango anverso de numeros impares  */
let inicio = -4
let fin = 6;
    
// Aseguramos que el número inicial sea impar.
if ( inicio % 2 === 0 ) {
    inicio++;
}

console.group( 'Rango anverso' );

for ( let i = inicio; i <= fin; i += 2 ) {
    console.log( i );
}

console.groupEnd();


/** Generar un rango reverso de numeros impares  */
inicio = 6
fin = -4;
    
// Aseguramos que el número inicial sea impar.
if ( inicio % 2 === 0 ) {
    inicio--;
}

console.group( 'Rango reverso' );

for ( let i = inicio; i >= fin; i -= 2 ) {
    console.log( i );
}

console.groupEnd();


