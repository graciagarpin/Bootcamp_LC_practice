//AGENDA. implementar una agenda para un equipo de personas, de modo que nos indique que horas tienen
// libres y que horas están ocupados. Además, vamos a generar un algoritmo que haga una búsqueda en un equipo
// y determine cual es la primera hora en que todos los miembros del equipo están libres,
// para asi poder establecer una reunión. Es decir, que busque el primer hueco disponible en sus agendas.

var WORK_HOURS = [
  //este es el objeto franjas horarias
  '08:00 - 09:00',
  '09:00 - 10:00',
  '10:00 - 11:00',
  '11:00 - 12:00',
  '12:00 - 13:00',
  '13:00 - 14:00',
  '15:00 - 16:00',
  '16:00 - 17:00',
];

var myTeam = [
  //este es el objeto equipo y contiene cada miembro con su disponibilidad (ahora mismo true para las 8 franjas horarias)
  {
    name: 'Maria',
    availability: new Array(8).fill(true),
  },
  {
    name: 'Pedro',
    availability: new Array(8).fill(true),
  },
  {
    name: 'Esther',
    availability: new Array(8).fill(true),
  },
  {
    name: 'Marcos',
    availability: new Array(8).fill(true),
  },
];

// 1. Generación aleatoria de la disponibilidad:
// recorrer todos los miembros del equipo, y a su vez, para cada miembro, todas las franjas
// horarias de su disponibilidad, e ir asignando aleatoriamente si está disponible o no en dicha franja.
// Una vez hayas generado tu agenda aleatoria, muestrala por consola

function crearAgendaDeDisponibilidad(myTeam, WORK_HOURS) {
  for (var member of myTeam) {
    // recorrer todos los miembros del equipo
    console.log('la persona con nombre ' + member.name);

    for (let index = 0; index < member.availability.length; index++) {
      // para cada miembro, recorrer todas las franjas e ir asignando si está disponible o no esa franja
      member.availability[index] = generacionAleatoriaBinaria();
      console.log(WORK_HOURS[index] + ' ' + member.availability[index]);
    }
  }
}

crearAgendaDeDisponibilidad(myTeam, WORK_HOURS);

function generacionAleatoriaBinaria() {
  return Math.random() < 0.5 ? 'si' : 'no';
}
