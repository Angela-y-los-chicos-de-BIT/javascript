/** Acceder a los valores de un objeto 
 * Recordemos que:
 * 1. Un objeto agrupa una serie de valores por una clave (propiedad o atributo) y un valor,
 * 2. Cada propiedad puede tener dentro de si cualquier tipo de datos tanto primitivo como complejo
 * 3. Los objetos en JavaScript son Objetos prototipados, lo que quiere decir que en cualquier momento pueden ser modificados, tanto en su estructura como en el tipo de datos que posee cada una de sus propiedades
 * */

/** Definir un objeto a partir de su clase global */
const persona = new Object();

persona.nombre = 'Sofia';
persona.edad = 11;
persona.aprendiendo = [ 'Ingles', 'Frances', 'Artes' ];
persona.contacto = {
    correo: 'sofia@correo.co',
    movil: '300.876.2311'
}

/** Acceder a los valores de un objeto */
console.log( persona );                     // Mostrará todo el objeto
console.log( persona.nombre );              // Mostrará  --->  Sofia
console.log( persona.aprendiendo );         // Mostrará  --->  (3) [ 'Ingles', 'Frances', 'Artes' ]
console.log( persona.aprendiendo[ 1 ] );    // Mostrará  --->  'Frances'
console.log( persona.contacto );            // Mostrará  --->  { correo: 'sofia@correo.co', movil: '300.876.2311' }
console.log( persona.contacto.correo );             // Mostrará  --->  sofia@correo.co  (Sintaxis punto)
console.log( persona.contacto[ 'correo' ] );        // Mostrará  --->  sofia@correo.co  (Sintaxis punto & array)
console.log( persona[ 'contacto' ][ 'correo' ] );   // Mostrará  --->  sofia@correo.co  (Sintaxis array)

/** Definir un objeto de forma literal */
const mascota = {
    nombre: 'Rex',
    esPuro: true,
    raza: 'Pastor Aleman',
    habilidades: [ 'Pastoreo', 'Proteccion', 'Busqueda', 'Rescate', 'Guia', 'Guardian' ],
    edad: 2,
    padres: {
        mama: { nombre: 'Katia', raza: 'Pastor Belga', edad: 4 },
        papa: { nombre: 'Rocky', raza: 'Pastor Aleman', edad: 6 }
    }
}

/** Modificar valores al objeto */
mascota.nombre = 'Marx';        // Usando Sintaxis punto
mascota[ 'esPuro' ] = false;    // Usando Sintaxis array

console.log( persona );         // Mostrará todo el objeto con el nombre modificado a 'Marx' y esPuro a false

mascota.habilidades[ 3 ] = 'Jugar';
mascota.habilidades[ mascota.habilidades.length - 1 ] = 'Ladrar';   

console.log( persona );         // Mostrará todo el objeto con el campo con indice 3 cambiado a 'Jugar' y el último campo a 'Ladrar'

/** Agregemos valores al objeto en propiedades no existentes */
mascota.propietario = 'Juan Carlos';
mascota.estaVacunado = true;

console.log( persona );         // Mostrará todo el objeto con las nuevas propiedades propietario y estaVacunado

/** Una lista en JavaScript soporta todo tipo de datos, tanto primitivos como complejos */
const objecto = { 
    nombre: 'Manuela', 
    edad: 9, 
    esFeliz: true, 
    id: Symbol( 'manu' ), 
    codigo: '45', 
    esHombre: false, 
    pi: 3.1415, 
    amiga: { name: 'Sofia', age: 62 }, 
    unNulo: null, 
    listaEspeciales: [ undefined, NaN, null ],
    unaFuncion: function() {
        console.log( 'Soy ' + this.nombre );
    }
};

console.log( objecto );