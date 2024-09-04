// 4. Escribe un programa que le pida al usuario ingresar un número.

// Si el número es múltiplo de 3 debe imprimir en la consola bing.
// Si el número es múltiplo de 5 debe imprimir en la consola bong.
// Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola bingbong.
// Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.

const numero = Number( prompt( 'Digite un numero' ) );
let msg = '';

if( numero % 3 == 0 ) {
    msg = 'bing';
}
if( numero % 5 == 0 ) {
    msg += 'bong';
}

console.log (
    /** Operador ternario */ 
    ( ! msg ) ? numero : msg 
);
