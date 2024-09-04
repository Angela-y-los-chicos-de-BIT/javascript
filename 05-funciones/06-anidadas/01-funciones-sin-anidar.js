var nombre = 'Juan';            // ---> Hoisting
// Declaracion de Funcion (Funcion Clasica) ---> Hoisting
function sumar( a, b ) {
    return a + b;
}

// Expresion de Funcion 
const restar = function ( a, b ) {
    return a - b;
}

// Funcion Flecha o Array Function
const multiplicar = ( a, b ) => {
    return a * b;
}
const dividir = ( a, b ) => a / b;
const saludar = nombre => 'Hola ' + nombre + '!';
const despedir = _ => 'Adios!';


const numero1 = 6;
const numero2 = 3;

console.log( 
    sumar( numero1, numero2 ),
    restar( numero1, numero2 ),
    multiplicar( numero1, numero2 ),
    dividir( numero1, numero2 ),
    saludar( 'Duban' ),
    despedir()
);