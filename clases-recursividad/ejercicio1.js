/*
Ejercicio 1:
Construya un algoritmo con JavaScript” para las estadísticas de atención de una
universidad teniendo en cuenta los siguientes requisitos:
1. Hay dos módulos de atención: terminal para llamada telefónica y oficina.
2. El sistema brinda las estadísticas de todo el proceso de atención:
• Cantidad de usuarios atendidos.
• Atendidos por día y especificación por segmento (Estudiante – docente) en
cada uno de los módulos de atención.
• Se permite trasferir de módulo de atención y se debe generar estadística de
esta trasferencia.
*/

// Crear un objeto para guardar las estadísticas
let stats = {
  totalUsers: 0,
  terminal: {
    students: 0,
    teachers: 0,
    transfered: 0
  },
  office: {
    students: 0,
    teachers: 0,
    transfered: 0
  }
};

// Función para atender a un usuario
function attendUser(module, user) {
  stats.totalUsers++;
  if (module === 'terminal') {
    if (user === 'student') {
      stats.terminal.students++;
    } else {
      stats.terminal.teachers++;
    }
  } else {
    if (user === 'student') {
      stats.office.students++;
    } else {
      stats.office.teachers++;
    }
  }
}

// Función para transferir a un usuario
function transferUser(from, to, user) {
  if (from === 'terminal') {
    stats.terminal.transfered++;
  } else {
    stats.office.transfered++;
  }
  attendUser(to, user);
}

// Atender a un usuario en la terminal
attendUser('terminal', 'student');
attendUser('terminal', 'teacher');
attendUser  ('terminal', 'student');
attendUser('office', 'teacher');
attendUser('office', 'student');
attendUser('office', 'teacher');


// Transferir a un usuario de la terminal a la oficina
transferUser('terminal', 'office', 'student');

// Mostrar las estadísticas

console.log(stats);
