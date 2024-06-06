const ATM = require('./ATM');
const Banco = require('./Banco');
const Cliente = require('./Cliente');
const Cuenta = require('./Cuenta');

// Crear banco y clientes
const banco = new Banco();
const cliente1 = new Cliente('123456789', '1234');
const cuenta1 = new Cuenta('1001', 500000);
const cuenta2 = new Cuenta('1002', 300000);

cliente1.agregarCuenta(cuenta1);
cliente1.agregarCuenta(cuenta2);
banco.agregarCliente(cliente1);

// Crear cajero automático
const atm = new ATM(banco);

// Encender el cajero
atm.encender();

// Insertar documento y PIN
atm.insertarDocumento('123456789');
if (atm.ingresarPIN('1234')) {
    // Realizar transacciones
    atm.realizarTransaccion('consultaSaldo', '1001');
    atm.realizarTransaccion('retiro', '1001', 100000);
    atm.realizarTransaccion('deposito', '1002', 150000, 'efectivo');
    atm.realizarTransaccion('transferencia', '1001', '1002', 50000);
}

// Apagar el cajero
atm.apagar();
