// 1. Diseña un algoritmo que capture un valor numérico y determine si dicho número es par o es impar.
// Elaborado por: Juan Camilo 

let numero = prompt( 'Ingresar un numero' );

console.log( isNaN( numero ) );

// Validar si el valor capturado es un No numero
if( isNaN( numero) ) {
    console.log( 'ingrese un numero valido' );
}
else {
    /** Camilo */
    if ( numero % 2  == 0 )
    { 
        console.log ( 'Es par');
    }
    else if ( numero %2 == 1 )
    {
        console.log ( 'es impar');
    }
}