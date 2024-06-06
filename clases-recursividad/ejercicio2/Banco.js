class Banco {
    constructor() {
        this.clientes = [];
    }

    agregarCliente(cliente) {
        this.clientes.push(cliente);
    }

    validarCliente(documentoID) {
        return this.clientes.find(cliente => cliente.documentoID === documentoID) || null;
    }

    validarPIN(cliente, pin) {
        return cliente.pin === pin;
    }

    retirarDinero(cliente, cuentaID, monto) {
        const cuenta = cliente.obtenerCuenta(cuentaID);
        if (cuenta && cuenta.saldo >= monto && monto % 50000 === 0) {
            cuenta.saldo -= monto;
            return true;
        }
        return false;
    }

    depositarDinero(cliente, cuentaID, monto, tipo) {
        const cuenta = cliente.obtenerCuenta(cuentaID);
        if (cuenta) {
            cuenta.saldo += monto;
        }
    }

    transferirDinero(cliente, cuentaOrigenID, cuentaDestinoID, monto) {
        const cuentaOrigen = cliente.obtenerCuenta(cuentaOrigenID);
        const cuentaDestino = cliente.obtenerCuenta(cuentaDestinoID);
        if (cuentaOrigen && cuentaDestino && cuentaOrigen.saldo >= monto) {
            cuentaOrigen.saldo -= monto;
            cuentaDestino.saldo += monto;
            return true;
        }
        return false;
    }

    consultarSaldo(cliente, cuentaID) {
        const cuenta = cliente.obtenerCuenta(cuentaID);
        return cuenta ? cuenta.saldo : 0;
    }
}

module.exports = Banco;
