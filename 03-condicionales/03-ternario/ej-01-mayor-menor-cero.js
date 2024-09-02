const numero = -10;

/** Version - if-else */
if( numero == 0 ) 
    console.log( 'Es CERO' );
else if( numero > 0 )
    console.log( 'Es mayor a CERO' );
else
    console.log( 'Es menor a CERO' );

/** Version - ternaria */
// (condicion) ? (verdadera) : (falso);
( numero == 0 ) 
    ? console.log( 'Es CERO' )
    : ( numero > 0 ) 
        ? console.log( 'Es mayor a CERO' )
        : console.log( 'Es menor a CERO' );

/** Version - ternaria de asignacion */
const msg = ( numero == 0 )
        ? 'Es CERO'
        : ( numero > 0 ) 
            ? 'Es mayor a CERO'
            : 'Es menor a CERO';

console.log( msg );