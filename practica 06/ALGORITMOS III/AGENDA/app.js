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
      member.availability[index] = getRandom();
      // Una vez hayas generado tu agenda aleatoria, muestrala por consola
      console.log(WORK_HOURS[index] + ' ' + member.availability[index]);
    }
  }
}

createScheduleOfAvailability(myTeam, WORK_HOURS);

function getRandom() {
  return Math.random() < 0.5 ;
}

// 2. Además, vamos a generar un algoritmo que haga una búsqueda en un equipo
// y determine cual es la primera hora en que todos los miembros del equipo están libres,
// para asi poder establecer una reunión. Es decir, que busque el primer hueco disponible en sus agendas.

//recorre member.availability === true

// Algoritmo : empezar por el primer miembro y recorrer hasta encontrar disponibilidad true y pasar al siguiente miembro
// y recorrerlo. Para agilizar el proceso, como tienen que coincidir todos en true, creo la variable cadena
// y la inicializo a true, cuando esta encuentra un false, directamente se rompe y no sigue consultando, y
// se reinicia la búsqueda desde la siguiente hora disponible para el priemr miembro.

// Para que se detenga cuando encuente la primera hora disponible para todos los miembros, permito el flujo 
// siempre y cuando no se encuentre coincidencia horaria, y el el momento que la encuentre la corto.

function findFirstHourAvailableToAllMembers(myTeam, WORK_HOURS) {
  var member = myTeam[0];
  var notFound = true;
  var index = 0;
  while (notFound && index < myTeam.length) { // no hace falta poner q las var de las condiciones son === true, lo hace por defecto.
    var availability = member.availability[index];
    if (availability) {
      var memberIndex = 1;
      var cadena = true;
      while (cadena && memberIndex < myTeam.length) {
        if (myTeam[memberIndex].availability[index] === false) {
          cadena = false;
        }
        memberIndex++;
      }
      if (cadena) {
        notFound = false;
        console.log('el equipo está disponible de ' + WORK_HOURS[index]);
      }else console.log('El equipo no está disponible a ninguna hora');
    }
    index++;
  }
}

findFirstHourAvailableToAllMembers(myTeam, WORK_HOURS);
