// 10. Completa el siguiente programa para imprimir los números que sean mayores a 10.

const nums = [ 1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39 ];
// escribe tu código acá

/** No se debe hacer con filter */
console.group( 'filter' );
const newNums = nums.filter( function( value ) {
    return value > 10;
});
console.log( newNums );
console.groupEnd();
/** Sin filter */

console.group( 'for' );
for ( let i = 0; i < nums.length; i++ ) {
    if( nums[ i ] > 10 ) {
        console.log( nums[ i ] );
    }    
}
console.groupEnd();


let i = 0;
console.group( 'while' );
while ( i < nums.length ) {
    if( nums[ i ] > 10 ) {
        console.log( nums[ i ] );
    }    

    i++;
}
console.groupEnd();