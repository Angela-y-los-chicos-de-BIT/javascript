
const objetoDePromesa = new Promise( function ( resolve, reject ) {
    // Logica

    // Condicion --> resolve o reject
    resolve( 'Ok' );
} );


/** Resolver una promesa */
// objetoDePromesa
//     .then( function ( respuesta ) {
//         console.log( '>>> ', respuesta );
//     } )     // resolve
//     .catch( function ( respuesta ) {
//         console.log( '*** ', respuesta );
//     } );   // reject / exceptions


/** Resolver un promesa usando funciones flecha */
objetoDePromesa
    .then( response => {
        console.log( '>>> ', response );
    })
    .catch( err => {
        console.error( '*** ', err );
    });