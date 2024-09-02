// Sumar numeros pares version corta
let suma = 0;

let i = 0;
while( i < 11 ) {
    suma += i;

    i = i + 2;
}

console.log( suma );

// Sumar numeros pares version larga
suma = 0;
i = 0;
while( i < 11 ) {
    if( i % 2 == 0 )
        suma = suma + i;

    i = i + 2;
}
