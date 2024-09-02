let edad = 18;
let genero = 'masculino';

let descuento = 0.1;
let precio = 50000;

let costo = 0;
let msg = '';


/** Version anidada */
if( edad >= 18 ) {
    / Entra al bar */
    if( genero == 'femenino' ) {
        costo = precio - ( precio * descuento );
    }
    else {
        costo = precio;
    }
}
else {
    / No entra */
    console.log( 'No reservamos los derechos de admision' );
}

msg = ( costo == 0 ) ? '$0' : 'Costo entrada: $' + costo + '.oo ';
console.log( msg );


/** Version NO anidada */
if( edad >= 18 && genero == 'femenino'  ) {
    / Entra al bar */
    costo = precio - ( precio * descuento );
}
else if ( edad >= 18 && genero == 'masculino' ) {
    costo = precio;
}
else {
    / No entra */
    console.log( 'No reservamos los derechos de admision' );
}

msg = ( costo == 0 ) ? '$0' : 'Costo entrada: $' + costo + '.oo ';
console.log( msg );
