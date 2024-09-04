/** Función constructora
    La función constructora es una función especial que se usa para crear y inicializar objetos. 
    Esta se define como una función normal, pero se invoca usando la palabra clave new. Al hacerlo, la función crea un nuevo objeto, lo configura según las instrucciones en la función constructora, y lo devuelve */

/********* FORMA 1 *********/
// Define en la función constructora los atributos
function Mascota( nombre, raza, edad ) {
    /** Atributos (propiedades o llaves) */
    this.nombre = nombre;
    this.raza = raza;
  }
  
// Agrega métodos al prototipo de Persona usando la propiedad 'prototype'
Mascota.prototype.saludar = function() {
    console.log( `${ this.nombre } dice: Guau, guau, guau!`);   
};

/********* FORMA 2 *********/
// Define en la función constructora los atributos y los metodos
function Persona( nombre, apellido ) {
    /** Atributos (propiedades o llaves) */
    this.nombre = nombre;
    this.apellido = apellido;

    // Agregamos un método al prototipo de Persona dentro del cuerpo de la funcion constructora
    this.saludar = function () {
        console.log( 'Hola a todos soy ' + this.nombre + ' ' + this.apellido + '!' );
    }
}

/** Implementacion las funciones constructoras definidas en la parte superior */
const persona1 = new Persona( 'Duban', 'Lopez' );
console.log( persona1 );        // Persona { nombre: 'Duban', apellido: 'Lopez', saludar: [Function (anonymous)] }
persona1.saludar();             // Hola a todos soy Duban Lopez!

const persona2 = new Persona( 'Alfonso', 'Vega' );
console.log( persona2 );        // Persona { nombre: 'Alfonso', apellido: 'Vega', saludar: [Function (anonymous)] }
persona2.saludar();             // Hola a todos soy Alfonso Vega!

const mascota = new Mascota( 'Milo', 'Chamier', 3 );
console.log( mascota );         // Mascota { nombre: 'Milo', raza: 'Chamier' }
mascota.saludar();              // Milo dice: Guau, guau, guau!