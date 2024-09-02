let isMale = false;

/** Version - if-else */
if( isMale ) {
    console.log( 'H' );
}
else {
    console.log( 'F' );
}


/** Version - ternario */
( isMale ) ? console.log( 'H' ) : console.log( 'F' );

/** Version - ternario con asignacion */
const gender = ( isMale ) ? 'H' : 'F'
console.log( gender );