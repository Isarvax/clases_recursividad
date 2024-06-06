class Cliente {
    constructor(documentoID, pin) {
        this.documentoID = documentoID;
        this.pin = pin;
        this.cuentas = [];
    }

    agregarCuenta(cuenta) {
        this.cuentas.push(cuenta);
    }

    obtenerCuenta(cuentaID) {
        return this.cuentas.find(cuenta => cuenta.id === cuentaID) || null;
    }
}

module.exports = Cliente;
