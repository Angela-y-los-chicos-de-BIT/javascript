/** Scope: Alcance */
var numeroDeChicas = 2;         // Se ve dentro del objeto global
var numeroDeChicas = 19;        // Se puede redeclarar

let numeroDeChicos = 14;
// let numeroDeChicos = 9;      // No se puede redeclarar (por eso esta comentado por que de lo contrario genera un error)

/** Objeto GLobal de JavaScript en el Browser  */
console.log( window );  // Objeto Global en Browser (FrontEnd)
console.log( global );  // Objeto Global en Node (BackEnd)