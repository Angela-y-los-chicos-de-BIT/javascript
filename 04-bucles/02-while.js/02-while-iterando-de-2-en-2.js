/** Mostrar los numeros pares de 0 a 9 usando un condicional */
let i = 0;
while ( i < 10 ) {
    if( i % 2 == 0 ) {
        console.log( i );
    }

    i = i + 1;
}


/** Mostrar los numeros pares de 0 a 9 sin condicional */
i = 0;
while( i < 10 ) {
    console.log( i );
    
    i += 2;
}

/**
 * IMPORTANTE: Recordar 
 *   i = i + 1; -- equivale a -->  i++;
 *   i = i - 1; -- equivale a -->  i--;
 *   i = i + 2; -- equivale a -->  i += 2;
 */