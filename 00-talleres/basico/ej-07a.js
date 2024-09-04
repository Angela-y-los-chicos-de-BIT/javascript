// 7. Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:

// Version: Juan Esteban

const 
    numero1 = Number( prompt( 'Digita primer numero' ) ),
    numero2 = Number( prompt( 'Digita segundo numero' ) );

if( numero1 < numero2 ) {
    for( let i = numero1; i <= numero2; i++ ) {
        console.log( i );
    }
}
else {
    for( let i = numero2; i <= numero1; i++ ) {
        console.log( i );
    }
}

