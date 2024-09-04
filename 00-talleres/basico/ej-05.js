// 5. Escribe un programa que le pida al usuario ingresar una frase. El programa debe imprimir la frase en la consola 10 veces. NOTA: utiliza un ciclo para imprimir la frase las 10 veces.

const frase = prompt( 'Digita tu frase favorita' );

for( let i = 0; i < 10; i++ ) {
    console.log( 'for ', frase );
}

let i = 0;
while ( i < 10 ) {
    console.log( 'while ', frase );
    i++;
}