class Reserva {
    constructor(cliente, habitacion, personas, periodo, aceptaMascotas) {
        this.cliente = cliente;
        this.habitacion = habitacion;
        this.personas = personas;
        this.periodo = periodo;
        this.aceptaMascotas = aceptaMascotas;
    }
}

module.exports = Reserva;
