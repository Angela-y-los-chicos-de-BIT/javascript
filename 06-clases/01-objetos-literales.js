/** Objetos literales poseen
 *   - Atributos (propiedades o llaves)
 *   - Metodos (Acciones o funciones dentro del contexto del objeto)
 */  
const persona1 = {
    // Atributos (propiedades o llaves)
    nombre: 'Yolbert',
    apellido: 'Rivas',
    // Metodos (Acciones o funciones dentro del contexto del objeto)
    saludar() {
        console.log( 'Hola soy ' + this.nombre + ' ' + this.apellido );
    }
};

const persona2 = {
    // Atributos (propiedades o llaves)
    nombre: 'Angela',
    apellido: '',
    // Metodos (Acciones o funciones dentro del contexto del objeto)
    saludar: function() {
        return 'Hola soy ' + this.nombre + ' ' + this.apellido;
    }
}

const persona3 = {
    // Atributos (propiedades o llaves)
    nombre: 'David Santiago',
    apellido: '',
    edad: 26
}

console.log( persona1 );    // { nombre: 'Yolbert', apellido: 'Rivas', saludar: [Function: saludar] }
console.log( persona2 );    // { nombre: 'Angela', apellido: '', saludar: [Function: saludar] }
console.log( persona3 );    // { nombre: 'David Santiago', apellido: '', edad: 26 }

persona1.saludar();                 // Hola soy Yolbert Rivas
console.log( persona2.saludar() );  // Hola soy Angela
// console.log( persona3.saludar() );   /** La funcion saludar no existe */