/** Insertar numeros aleatorios de 0 a 10 en una lista */

// const aleatorio = Math.random() * 10; // 0 y 1
// console.log( parseInt( aleatorio ) );

const longitud = prompt( 'Cuantos numeros deseas guardar' );
const numeros = [];

let i = 0;
while( i < longitud ) {
    // console.log( i, Math.random() * 10 );

    const aleatorio = Math.round( Math.random() * 10 );
    numeros.push( aleatorio );

    i++;
}

console.log( numeros );

// Clase Math para redondear valores
// - Math.round()      9.1, 9.4999 --> 9, 
//                     9.5 o mayor --> 10
// - Math.ceil()       9.5, 9.1, 9.9 --> 10
// - Math.floor()      9.5, 9.1, 9.9 --> 9