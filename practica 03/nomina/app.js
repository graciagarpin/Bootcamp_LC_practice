//Calcular sueldo neto en nómina

const empleado = { bruto: 14500, hijos: 2, pagas: 14 };

console.log(empleado.bruto);

//Condiciones

let porcentajeRetencion;

if (empleado.bruto < 12000) {
  porcentajeRetencion = 1;
} else if (empleado.bruto > 12000 && empleado.bruto < 24000) {
  porcentajeRetencion = 0.08;
} else if (empleado.bruto > 24000 && empleado.bruto < 34000) {
  porcentajeRetencion = 0.16;
} else if (empleado.bruto > 34000) {
  porcentajeRetencion = 0.3;
}

// No podemos usar switch porque acepta valores concretos y no condiciones

// let salarioBrutoAnual = empleado.bruto;

//   switch (salarioBrutoAnual) {
//   case salarioBrutoAnual < 12000:
//   retencion = 0; break;
//   case salarioBrutoAnual > 12000 || salarioBrutoAnual < 24000:
//   retencion = 8; break;
//   case salarioBrutoAnual > 24000 || salarioBrutoAnual < 34000:
//   retencion = 16; break;
//   case salarioBrutoAnual > 34000: retencion = 30; break;
//   default : retencion = 0; break;
// }

if (empleado.hijos != 0) {
  porcentajeRetencion = porcentajeRetencion - 0.02;
}

console.log(porcentajeRetencion);

let salarioBrutoAnual = empleado.bruto;

let retencion = salarioBrutoAnual * porcentajeRetencion;

console.log(retencion);

let salarioNetoAnual = salarioBrutoAnual - retencion;

console.log(salarioNetoAnual);

let salarioNetoMensual;

if ((empleado.pagas = 12)) {
  salarioNetoMensual = salarioNetoAnual / 12;
} else if ((empleado.pagas = 14)) {
  salarioNetoMensual = salarioNetoAnual / 14;
}

console.log(salarioNetoMensual);
