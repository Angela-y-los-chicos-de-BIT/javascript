/* Insertar valores en una lista */
const fruits = [];

let i = 0;
while( i < 5 ) {
    const fruit = prompt( 'Digita una fruta' );
    fruits.push( fruit );

    i++;
}

console.log( fruits );