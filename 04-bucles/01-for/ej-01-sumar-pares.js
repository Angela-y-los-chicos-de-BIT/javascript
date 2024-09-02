// Sumar numeros pares version corta
let suma = 0;
for( let i = 0; i < 11; i = i + 2 ) {
    suma += i;
}

console.log( suma );

// Sumar numeros pares version larga
suma = 0;
for( let i = 0; i < 11; i = i + 1 ) {
    if( i % 2 == 0 )
        suma = suma + i;
}