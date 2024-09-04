// 7. Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:

// Version: Miguel Angel

const 
    numero1 = Number( prompt( 'Digita primer numero' ) ),
    numero2 = Number( prompt( 'Digita segundo numero' ) );

let contador;

if( numero1 > numero2 ) {
    contador = numero2;
    
    while( contador <= numero1 ) {
        console.log( contador++ );
    }

}
else {
    contador = numero1;

    while( contador <= numero2 ) {
        console.log( contador++ );
    }
}