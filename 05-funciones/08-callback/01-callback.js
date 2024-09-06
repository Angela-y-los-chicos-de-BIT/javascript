// - callbacks (vintage)
//   1. Es una funcion que se pasa de parametro a otra funcion

console.log( 'Hola a todos' );

// Definicion de una funcion que recibe otra funcion
function getData( codigo ) {

    setTimeout( function() {
        const data = { nombre: 'Manuela', edad: 30 };    
        
        codigo( data );
    }, 5000 );

    codigo( 'Diego' );
}

function showData( data ) {
    console.log( 'data: ', data );
}

/** Implementacion del ejemplo */
getData( showData );
console.log( 'Adios acabe de ejecutar todo' );