const { Cliente } = require( "./Cliente.js" );  // Importacion Agrupada

class Cuenta {
    constructor( numero, cliente, saldo = 150 ) {
        this.saldoApertura = 200;

        this.numero = numero;
        this.apertura( saldo );
        this.cliente = cliente;
    }

    /** Metodos */
    apertura( valor ) {
        if( valor < 150 ) {
            console.error( 'El saldo minimo para aperturar una cuenta es $150' );
            // throw new Error( 'El saldo minimo para aperturar una cuenta es $150' );
        }

        this.saldo = valor;
    }

    consignar( valor ) {
        this.saldo = this.saldo + valor;
    }

    retirar( valor ) {
        this.saldo = this.saldo - valor;
    }

    consultar() {
        return this.saldo;
    }

    transferir( valor, cuentaDestino ) {}
}

/** Exportacion por default */
module.exports = Cuenta;


/** Implementacion de prueba */
const clienteDiego = new Cliente( '12373362', 'Diego', 'diego@correo.co' );

clienteDiego.edad = 32;
clienteDiego.apellidos = 'Jimenez';

// console.log( clienteDiego );

const cuentaDiego = new Cuenta( '20013409-1', clienteDiego, 50 );
console.log( cuentaDiego );