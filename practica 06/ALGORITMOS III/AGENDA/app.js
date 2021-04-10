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

//AGENDA. 1. implementar una agenda para un equipo de personas, de modo que nos indique que horas tienen
// libres y que horas están ocupados.

function createScheduleOfAvailability(myTeam, WORK_HOURS) {
  for (var member of myTeam) {
    // recorrer todos los miembros del equipo
    console.log('la persona con nombre ' + member.name);

    for (let index = 0; index < member.availability.length; index++) {
      // para cada miembro, recorrer todas las franjas e ir asignando si está disponible o no esa franja
      member.availability[index] = getTandom();
      // Una vez hayas generado tu agenda aleatoria, muestrala por consola
      console.log(WORK_HOURS[index] + ' ' + member.availability[index]);
    }
  }
}

createScheduleOfAvailability(myTeam, WORK_HOURS);

function getTandom() {
  return Math.random() < 0.5 ? 'si' : 'no';
}

// 2. Además, vamos a generar un algoritmo que haga una búsqueda en un equipo
// y determine cual es la primera hora en que todos los miembros del equipo están libres,
// para asi poder establecer una reunión. Es decir, que busque el primer hueco disponible en sus agendas.

function firstHourAvailableToAll(params) {}
