/** 1. Genera numeros aleatorios */
const longitud = prompt( 'Cuantos numeros deseas guardar' );
const numeros = [];

for( let i = 0; i < longitud; i++ ) {
    // console.log( i, Math.random() * 100 );

    const aleatorio = Math.round( Math.random() * 100 );
    numeros.push( aleatorio );
}

console.log( numeros );

/** 2. Calcular cuantos pares e impares hay en la lista */
let cantidadPares = 0;
let cantidadImpares = 0;


for( let i = 0; i < numeros.length; i++ ) {
    if( numeros[ i ] % 2 == 0 ) {
        cantidadPares++;  // cantidadPares = cantidadPares + 1;
    }
    else {
        cantidadImpares++;  // cantidadImpares = cantidadImpares + 1;
    }
}

console.log( 'La cantidad de numeros pares es: ' + cantidadPares );
console.log( 'La cantidad de numeros impares es: ' + cantidadImpares );