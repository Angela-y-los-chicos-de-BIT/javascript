/** Mostrar los numeros pares de 0 a 9 usando un condicional */
for( let i = 0; i < 10; i = i + 1 ) {
    if( i % 2 == 0 ) {
        console.log( i );
    }
}


/** Mostrar los numeros pares de 0 a 9 sin condicional */
for( let i = 0; i < 10; i += 2 ) {
    console.log( i );
}

/**
 * IMPORTANTE: Recordar 
 *   i = i + 1; -- equivale a -->  i++;
 *   i = i - 1; -- equivale a -->  i--;
 *   i = i + 2; -- equivale a -->  i += 2;
 */