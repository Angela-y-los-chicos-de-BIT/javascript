// 6. Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario. Por ejemplo, si el usuario ingresó la frase Hola Mundo y el número 5, el programa debe imprimir Hola Mundo 5 veces:

const frase = prompt( 'Digita la frase' );
const repeticiones = prompt( 'Cantidad de veces que quieres repetirla ' );

for ( let i = 0; i < repeticiones; i++ ) {
    console.log( 'for ', frase );
}

let i = 0;
while ( i < repeticiones ) {
    console.log( 'while ', frase );

    i++;
}


