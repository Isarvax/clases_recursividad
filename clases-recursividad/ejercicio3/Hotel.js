const Habitacion = require('./Habitacion');
const Reserva = require('./Reserva');
const Estadisticas = require('./Estadisticas');

class Hotel {
    constructor() {
        this.habitaciones = {
            individual: { fumador: [], noFumador: [] },
            doble: { fumador: [], noFumador: [] },
            familiar: { fumador: [], noFumador: [] }
        };
        this.reservas = [];
        this._inicializarHabitaciones();
    }

    // Inicializa las habitaciones del hotel
    _inicializarHabitaciones() {
        for (let i = 0; i < 3; i++) {
            this.habitaciones.individual.fumador.push(new Habitacion('individual', true));
            this.habitaciones.individual.noFumador.push(new Habitacion('individual', false));
            this.habitaciones.doble.fumador.push(new Habitacion('doble', true));
            this.habitaciones.doble.noFumador.push(new Habitacion('doble', false));
            this.habitaciones.familiar.fumador.push(new Habitacion('familiar', true));
            this.habitaciones.familiar.noFumador.push(new Habitacion('familiar', false));
        }
    }

    // Busca una habitación disponible de acuerdo a los criterios especificados
    _buscarHabitacion(tipo, fumador, aceptaMascotas) {
        const habitacionesDisponibles = this.habitaciones[tipo][fumador ? 'fumador' : 'noFumador'];
        return habitacionesDisponibles.find(habitacion => habitacion.disponible && (tipo !== 'familiar' || aceptaMascotas === habitacion.aceptaMascotas));
    }

    // Reserva una habitación para un cliente
    reservarHabitacion(cliente, tipo, fumador, personas, aceptaMascotas, periodo) {
        const habitacion = this._buscarHabitacion(tipo, fumador, aceptaMascotas);
        if (habitacion && habitacion.capacidad >= personas) {
            const reserva = new Reserva(cliente, habitacion, personas, periodo, aceptaMascotas);
            this.reservas.push(reserva);
            habitacion.disponible = false;
            console.log(`Reserva exitosa para ${cliente.nombre} en una habitación ${tipo}.`);
        } else {
            console.log('No hay habitaciones disponibles o no se puede exceder la capacidad.');
        }
    }

    // Genera un reporte de estadísticas de las reservas
    generarEstadisticas() {
        const estadisticas = new Estadisticas(this.reservas);
        return estadisticas.generarReporte();
    }
}

module.exports = Hotel;
