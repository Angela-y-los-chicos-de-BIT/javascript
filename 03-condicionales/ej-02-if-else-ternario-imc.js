/* 1. Calcular el IMC. La formula es la que tenemos a continuacion
    IMC = Peso (kg) / Estatura (mts) * Estatura (mts)
*/

const peso = 56;
const estatura = 1.66;

/** Calculo de la formula del Indice de Masa Corporal */
const imc = peso / ( estatura ** 2 );       
/*  Diferentes formas de escribir la parte de exponenciacion en JavaScript
 *  estatura * estatura     ---> Sintaxis: Concepto matematico, el cuadrado de un numero es equivalente a la multiplicaciond e este nunero por el mismo
 *  estatura ** 2           ---> Sintaxis: ** (Elevado a)
 *  Math.pow( estatura, 2 ) ---> Sintaxis: Math.pow( base, exponente )
*/

console.log( imc );

// 2. Evaluar el resultado del IMC del punto anterior para determinar el estado actual de la persona: 
//     - IMC es inferior a 18.5 (delgadez o bajo peso) 
//     - IMC es entre 18.5 y 24.9 (normal o peso saludable)
//     - IMC es entre 25.0 y 29.9 (sobre peso)
//     - IMC es 30.0 o superior (obesidad). 

// De acuerdo al valor debemos imprimir el siguiente mensaje: "Con un IMC de 31.5 la persona se encuentra en un estado de obesidad"

let mensaje = 'Con un IMC de ' + imc + ' la persona se encuentra en un estado de ';

/** Version - if-else */
if( imc < 18.5 ) 
    mensaje += 'delgadez o bajo peso';
else if( imc < 24.9 ) 
    mensaje += 'normal o peso saludable';
else if( imc < 29.9 ) 
    mensaje += 'sobre peso';
else 
    mensaje += 'obesidad';

console.log( mensaje );


/** Version - ternaria */
const msg = ( imc < 18.5 ) 
                ?  mensaje + 'delgadez o bajo peso'
                : ( imc < 24.9 ) 
                    ?  mensaje + 'normal o peso saludable'
                    : ( imc < 29.9 ) 
                        ?  mensaje + 'sobre peso'
                        :  mensaje + 'obesidad';

console.log( msg );