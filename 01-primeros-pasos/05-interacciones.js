/** Interacciones básicas en JavaScript */


/** Obtener datos a traves de un campo ventana emergente */
const name = prompt( 'Digita tu nombre' );
const isDev = confirm( name + ' ¿Tu profesión principal es Desarrollador de Software? S/N' );

let msg = '';

if( isDev ) {
    msg = prompt( 'Hey ' + name + ' bienvenido! n/ ¿Cuál es tu especialidad: Web, Movil, Data Science, Otro?' );
    msg = 'Wow! Tu especialidad es ' + msg + ' interesante. Sigamos aprendiendo juntos';
}
else {
    msg = prompt( 'Bienvenido! ' + name + ', entonces ¿Cuál es tú profesion ?' );
    msg = 'Bueno ' + msg + ' te ayudará a crecer. Empecemos a aprender juntos';
}

alert( msg );

/** Mostrar datos en consola 
 * https://developer.mozilla.org/es/docs/Web/API/console
*/
console.group( 'Tipos de console' );
    console.log( msg );
    console.info( msg );
    console.error( msg );
    console.warn( msg );
console.groupEnd();

document.write( '<h1>' + name + ', comenzemos!</h1>' );
