const list = [ 1, 4, 3, 6, 7, 9 ];

// function validate( value ) {
//     return value % 2 == 0;
// }

// const newList = list.filter( validate );

// console.log( newList );

// list.forEach( function( value ) {
//     console.log( value );
// });

// const modifiedList = list.map( function( value ) {
//     return value ** 2;
// } );

// console.log( modifiedList );

// const pares = list.filter( function( value ) {
//     return value % 2 == 0;
// });

// const paresAlCuadrado = pares.map( function( value ) {
//     return value ** 2;
// });


const paresAlCuadrado = list.filter( function( value ) {
    return value % 2 == 0;
}).map( function( value ) {
    return value ** 2;
});

console.log( paresAlCuadrado );