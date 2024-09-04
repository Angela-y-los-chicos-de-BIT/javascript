/** Clase:
 * Es una estructura de datos que puede modelar de forma homogenea un objeto, para que este pueda tener las mismas características para crear objetos del mismo tipo.
 * Una clase representa un nuevo tipo que creamos que JavaScript desconoce
*/
class Persona {
    /** Atributos (propiedades o llaves) */
    nombre = 'Juan';
    apellidos = 'Jimenez';

    /** Metodo constructor: 
     * Se ejecuta inmediatamente se crea el objeto, es decir cuando se usa la palabra 'new' para crearlo a partir de esta clase 
     * Esta se usa para asignar valores o inicializarlos en el mismo momento que se crea el objeto */
    constructor( nombre, apellidos ) {
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    /** Getters & Setters */

    /** Metodos de la clase */
    saludar () {
        return 'Hola a todos soy ' + this.nombre + ' ' + this.apellidos;
    }
}

class Mascota {
    nombre = 'Rex';
    raza = 'Pastor aleman';
    edad = 3;
    tienePedigree = true;

    constructor( nombre, raza, pedigree ) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = 0;
        this.tienePedigree = pedigree;
    }

    hablar() {
        return `${ this.nombre } dice: Guau, guau, guau!`;
    }
}

/** Implementacion las funciones constructoras definidas en la parte superior */
const persona1 = new Persona( 'Manuela', 'Gomez' );
console.log( persona1 );                // Persona { nombre: 'Manuela', apellidos: 'Gomez' }
console.log( persona1.saludar() );      // Hola a todos soy Manuela Gomez

const persona2 = new Persona( 'Juana', 'De Arco' );
console.log( persona2 );                // Persona { nombre: 'Juana', apellidos: 'De Arco' }
console.log( persona2.saludar() );      // Hola a todos soy Juana De Arco

const mascota = new Mascota( 'Milo', 'Chamier', false );
console.log( mascota );                 // Mascota { nombre: 'Milo', raza: 'Chamier', edad: 0, tienePedigree: false }
console.log( mascota.hablar() );        // Milo dice: Guau, guau, guau!