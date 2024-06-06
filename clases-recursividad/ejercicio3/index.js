const Hotel = require('./Hotel');
const Cliente = require('./Cliente');

// Crear el hotel
const hotel = new Hotel();

// Crear clientes
const cliente1 = new Cliente('Juan Pérez', 'México');
const cliente2 = new Cliente('Ana Gómez', 'España');

// Reservar habitaciones
hotel.reservarHabitacion(cliente1, 'doble', false, 3, false, '2024-05-01 a 2024-05-05');
hotel.reservarHabitacion(cliente2, 'familiar', true, 5, true, '2024-05-02 a 2024-05-06');

// Generar estadísticas
console.log(hotel.generarEstadisticas());
