/** Concatenacion de strings */
const nombre = prompt( 'Digita tu nombre' );

/** Forma 1: Operador + */
const concatenarUsandoOperadorDeSuma = 'Hola ' + nombre + ' bienvenido!';
alert( concatenarUsandoOperadorDeSuma );

/** Forma 2: Usando el método concat() */
const concatenarUsandoFuncionJS = 'Hola '.concat( nombre ).concat( ' bienvenido! ' );
alert( concatenarUsandoFuncionJS );

// Forma 3: Usando Template Strings (ECMAScript 5)
// ``:  Backtics (Obligatorias)
// ${}: Interpolacion
const templateString = `Hola ${ nombre } bienvenido!`;
alert( templateString );



