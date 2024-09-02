function operaciones( n1, n2 ) {

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

    /** Invocar o ejecutar las funciones */
    return {
        suma: sumar( n1, n2 ),
        resta: restar( n1, n2 ),
        multiplica: multiplicar( n1, n2 ),
        divide: dividir( n1, n2 )
    }
    return [
        sumar( n1, n2 ),
        restar( n1, n2 ),
        multiplicar( n1, n2 ),
        dividir( n1, n2 )
    ];
}

const numero1 = 6; 
const numero2 = 3;

const resultados = operaciones( numero1, numero2 );
console.log(resultados);