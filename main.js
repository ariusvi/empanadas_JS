export const fn = (a, b, c) => {
   // Cuerpo de la función: Completa la lógica de la función aquí.
};


const a = 12;     /*precio empanada pollo*/
const b = 14;     /*precio empanada ternera*/
const c = 16;     /*precio empanada verdura*/



if (a < 0 && b < 0 && c < 0) {                                       /* validar que a, b y c, son números enteros*/
   throw new Error("Introduzca una cantidad de empanadas válida");
}

if ((a + b + c) >= 40) {                                             /* validar que el total de empanadas no sea mayor que 40*/
   throw new Error("Excede la cantidad máxima de empanadas");
}

if ((a+b+c) % 3 !=0) {                                               /*validar que las empanadas sean múltiplo de 3*/
   throw new Error("No se aplica oferta 3x1");
}