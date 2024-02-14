export const fn = (a, b, c) => {

   const precioA = 12;     /*precio empanada pollo*/
   const precioB = 14;     /*precio empanada ternera*/
   const precioC = 16;     /*precio empanada verdura*/

   if (a < 0 || b < 0 || c < 0) {                                                /* validar que a, b y c, son números enteros, se utiliza | y no &, para que salte error solo con que 1 de los valores sea menor que 0, incluyendo así los números negativos*/
      throw new Error("Introduzca una cantidad de empanadas válida");
   }

   else if ((a + b + c) >= 40) {                                                 /* validar que el total de empanadas no sea mayor que 40*/
      throw new Error("Excede la cantidad máxima de empanadas");
   }

   else if ((a + b + c) % 3 != 0) {                                               /*validar que las empanadas sean múltiplo de 3*/
      throw new Error("No se aplica oferta 3x1");
   }
   else {
      let salida = Math.ceil(((a * precioA) + (b * precioB) + (c * precioC)) / 3);         /*operacion matemática para mostrar la salida dado 3 valores*/

      return salida;                                                                         /*con math.ceil se redondea a la alza, buscado en google*/
   };

}
