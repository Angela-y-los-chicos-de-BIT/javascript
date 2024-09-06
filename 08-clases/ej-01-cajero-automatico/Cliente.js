class Cliente {
    /** Atributos */

    constructor( id, nombre, correo ) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
    }
}

/** Exportacion Agrupada */
module.exports = {
    Cliente
} 

/** Prueba de implementacion */
// const clienteUno = new Cliente( '79873223', 'Alfonso', 'alfonso@correo.co' );
// console.log( clienteUno );

// const clienteDos = new Cliente( '12373362', 'Diego', 'diego@correo.co' );
// console.log( clienteDos );