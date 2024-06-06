class Estadisticas {
    constructor(reservas) {
        this.reservas = reservas;
    }

    // Genera un reporte de las reservas
    generarReporte() {
        const reporte = this.reservas.map(reserva => ({
            nombre: reserva.cliente.nombre,
            pais: reserva.cliente.paisOrigen,
            personas: reserva.personas,
            periodo: reserva.periodo,
            mascotas: reserva.aceptaMascotas
        }));

        const totalPersonas = this.reservas.reduce((total, reserva) => total += reserva.personas, 0);

        reporte.push({ totalPersonas });

        return reporte;
    }
}

module.exports = Estadisticas;
