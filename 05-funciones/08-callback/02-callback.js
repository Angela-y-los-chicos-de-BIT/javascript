// - callbacks (vintage)
//   1. Es una funcion que se pasa de parametro a otra funcion

console.log( 'Hola a todos' );

// Definicion de una funcion que recibe otra funcion
function getData( codigo ) {

    setTimeout( function() {
        const data = { nombre: 'Manuela', edad: 30 };    
        
        codigo( data );
    }, 5000 );  // Cantidad de Milisegundo

    codigo( 'Alfonso' );
    console.log( Date.now() );
}


/** Implementacion del ejemplo */
getData( function ( data ) {
    console.log( 'data: ', data );
} );
console.log( 'Adios acabe de ejecutar todo' );

