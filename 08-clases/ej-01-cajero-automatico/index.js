/** Cajeros Automaticos 
 *  1. Un cajero pertenece a una entidad financiera (Banco)
 *  2. Un [cajero] es usado por un [cliente] que posee una [cuenta] de ahorros o corriente de una entidad financiera [(banco)]
 *  3. Dependiento del tipo de cuenta debes cumplir con ciertos requisitos
 * 
 *  Funcionalidades
 *  0. Autenticarse
 *  1. Consultar Saldo
 *  2. Retirar Dinero
 *  3. Pagar Facturas
 *  4. Transacciones (pasar dinero de una cuenta a otra)
 * */
const { Cliente } = require("./Cliente");

 

const 
    clienteAngela = new Cliente( '109223411', 'Angela', 'angela@correo.co' ),
    clienteYorbert = new Cliente( '78323132', 'Yorbert', 'yorlbert@correo.co' );