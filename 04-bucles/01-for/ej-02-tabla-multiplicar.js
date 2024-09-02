const number = 9;

/** Tabla de multiplicar anversa */
console.group( 'Tabla de multiplicar anversa' );

for( let i = 0; i < 11; i++ ) {
    console.log( number + ' x ' + i + ' = ' + number * i );
}

console.groupEnd();

/** Tabla de multiplicar reverso */
console.group( 'Tabla de multiplicar reversa' );

for( let i = 10; i > 0; i-- ) {
    const j = -1 * ( ( i - 1 ) - ( 10 ) );                      // 10 - ( i - 1 )
    console.log( number + ' x ' + j + ' = ' + number * j );

}

console.groupEnd();