const number = 9;

/** Tabla de multiplicar anversa */
console.group( 'Tabla de multiplicar anversa' );

let i = 0;
while( i < 11 ) {
    console.log( number + ' x ' + i + ' = ' + number * i );

    i++;
}

console.groupEnd();

/** Tabla de multiplicar reverso */
console.group( 'Tabla de multiplicar reversa' );

i = 10;
while( i > 0 ) {
    const j = -1 * ( ( i - 1 ) - ( 10 ) );                      // 10 - ( i - 1 )
    console.log( number + ' x ' + j + ' = ' + number * j );

    i--;
}

console.groupEnd();