console.log( 'Hola a todos ejemplo con Promesas ' );

const getData = ( seCumple ) => {

    const objPromesa = new Promise( ( resolve, reject ) => {

        setTimeout( function() {
            const data = { nombre: 'Manuela', edad: 30 };

            if( seCumple )
                resolve( data );
            else
                reject( 'Error al obtener la data' );

        }, 5000 );  // Cantidad de Milisegundo

        
        console.log( 'Alfonso' );
    
    } );

    console.log( Date.now() );

    return objPromesa;
}

getData( false )
    .then(( res ) => {
        console.log( res );
    })
    .catch(( err ) => {
        console.error( err );
    });

console.log( 'Adios acabe de ejecutar todo' );


