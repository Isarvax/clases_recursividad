class Habitacion {
    constructor(tipo, fumador) {
        this.tipo = tipo;
        this.fumador = fumador;
        this.disponible = true;
        this.capacidad = this._definirCapacidad(tipo);
        this.aceptaMascotas = tipo === 'familiar';
    }

    // Define la capacidad de la habitación según su tipo
    _definirCapacidad(tipo) {
        const capacidades = {
            individual: 2,
            doble: 4,
            familiar: 6
        };
        return capacidades[tipo] || 0;
    }
}

module.exports = Habitacion;
