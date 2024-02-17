# Índice :card_index_dividers:
* <a href="## Enunciado del problema :dumpling:">Enunciado del problema :dumpling:</a>
* <a href="## Evaluación :white_check_mark:">Evaluación :white_check_mark:</a>
* <a href="## Abordando el enunciado :memo:">Abordando el enunciado :memo:</a>
* <a href="### ¿Qué nos dan? :confused:">¿Qué nos dan? :confused:</a>
* <a href="### ¡Empecemos! :checkered_flag:">¡Empecemos! :checkered_flag:</a>
* <a href="### Vamos a lo divertido :star2:">Vamos a lo divertido :star2:</a>
* <a href="## Solucionando el enunciado :end:">Solucionando el enunciado :end:</a>



## Enunciado del problema :dumpling:
El profesor Maple se embarca en la tarea de adquirir empanadas para todos los participantes del bootcamp de programación. Dado que hoy es el Día de las Empanadas,  hay una oferta especial en la que te llevas hasta tres empanadas y solo pagas la más cara. Con un presupuesto ajustado para el curso, los profesores debaten para intentar minimizar el gasto total por todas las empanadas.

Entonces, el profesor Maple decide seguir la siguiente estrategia: como la empanada más cara la tendrá que pagar de todas formas, la comprará junto a la segunda y tercera más caras, que ofrecen el mayor ahorro. Con las n-3 empanadas restantes, aplicará el mismo procedimiento hasta que no quede ninguna.

Los profesores reflexionan y llegan a la conclusión de que esta es la mejor estrategia. Pero cuando están a punto de pagar, escuchan la siguiente conversación de una familia de al lado:

"Queremos una empanada de pollo, de 12 euros, una de carne, de 14 euros, y una vegetariana, de 16 euros."

Los profesores piensan inmediatamente: "Cogerán la oferta 3x1, de forma que solo paguen los 16 euros de la empanada vegetariana y se lleven gratis la de carne y la de pollo". A lo cual, la familia continúa:

"Pero pónganosla de la siguiente forma: Dos empanadas mitad pollo y mitad vegetariana, y la de carne aparte. Como todas las empanadas valen 14 euros, cogeremos la oferta 3x1 y nos las llevaremos por 14 euros".

Cuando los profesores salen de su asombro, deciden que lo más sensato es utilizar el hecho de que las empanadas se pueden pedir mitad de un tipo y mitad de otro, pagando por ella la media del costo de las dos empanadas enteras. Así, una empanada mitad pollo y mitad vegetariana valdrá (12 + 16)/2 = 14 euros. Sin embargo, no logran decidir cuál es la mejor forma de repartir las empanadas en mitades primero, y en grupos después, para minimizar el precio.

Ayúdales haciendo una función que lo calcule lo más rápido posible: hay decenas de estudiantes hambrientos que dependen de ti.

Las empanadas que han elegido los profesores tienen 3, 4 o 5 ingredientes. La masa de una empanada vale 6 euros, y cada ingrediente adicional vale 2 euros. Así, las empanadas pueden valer 12, 14 o 16 euros. Se garantiza que el número total de empanadas será múltiplo de 3.

## Entrada :abacus:

La función debe tener tres parámetros de entrada. Cada conjunto de entrada consta de tres enteros, a b c, que son el número de empanadas de 3, 4 y 5 ingredientes, respectivamente. Se garantiza que el número de empanadas, a + b + c, cumple que a + b + c < 40. Además, el número de empanadas es divisible entre 3.

## Salida :plate_with_cutlery:

Por cada conjunto de entrada, retornar un único entero: la mínima cantidad de euros que se puede pagar para llevarse todas las empanadas.

## Ejemplos de casos de uso :eyes:

| Entrada     | Salida      |
| ----------- | ----------- |
| 1, 1, 1     | 14          |
| 3, 3, 0     | 26          |
| 2, 0, 1     | 14          |
| 9, 10, 11   | 142         |


## Instrucciones de uso :page_facing_up:

1. Clonar el repositorio
3. Instalar las dependencias:

    ```bash
    npm install
    ```

4. Completar los argumentos y el cuerpo de la función `fn` en el archivo (`main.js`). No se debe renombrar la función `fn`.

    ```javascript
    // main.js
    export const fn = (/* argumentos de la función */) => {
    // Cuerpo de la función: Completa la lógica de la función aquí.
    };
    ```

4. Ejecutar los test:
    ```bash
    npm run test
    ```

## Evaluación :white_check_mark:

### Mínimo
Para el APTO se deben pasar todos los test excepto los de validaciones de errores en la entrada de datos

### Extra
Pasar los test de validación de errores en la entrada de datos (Throws error)

### Ejemplo de ejecución de los test

```bash
✓ main.test.js (7)
   ✓ Function fn - Input Parameter Test Cases (7)
     ✓ Case: fn(1, 1, 1) - Expected Result: 14
     ✓ Case: fn(3, 3, 0) - Expected Result: 26
     ✓ Case: fn(2, 0, 1) - Expected Result: 14
     ✓ Case: fn(9, 10, 11) - Expected Result: 142
     ✓ Throw error on negative input value: fn(-1, 3, 1)
     ✓ Throws error when the total sum of inputs (2+2+1) is not a multiple of 3: fn(2, 2, 1)
     ✓ Throws error when the total sum of inputs (15+15+20) is not less than 40: fn(15, 15, 20)
```

## Abordando el enunciado :memo:
Primero leeremos varias veces el enunciado para buscar y entender qué nos piden, es el momento de ensuciar el enunciado:


<i>Ayúdales <mark>haciendo una función que lo calcule lo más rápido posible:</mark> hay decenas de estudiantes hambrientos que dependen de ti.

Las empanadas que han elegido los profesores tienen 3, 4 o 5 ingredientes. La masa de una empanada vale 6 euros, y cada ingrediente adicional vale 2 euros. Así, las <mark>empanadas pueden valer 12, 14 o 16 euros. Se garantiza que el número total de empanadas será múltiplo de 3.</mark> --> (%3 === 0)

Entrada

<mark>La función debe tener tres parámetros de entrada. Cada conjunto de entrada consta de tres enteros, a b c,</mark> que son el número de empanadas de 3, 4 y 5 ingredientes, respectivamente. <mark>Se garantiza que el número de empanadas, a + b + c, cumple que a + b + c < 40. Además, el número de empanadas es divisible entre 3.</mark>

Salida

<mark>Por cada conjunto de entrada, retornar un único entero: la mínima cantidad de euros que se puede pagar para llevarse todas las empanadas.</mark></i>

### ¿Qué nos dan? :confused:
Nos proporcionarán 3 argumentos, que serán los valores REALES de las CANTIDADES.
Es importante diferenciar entre <b>cantidades de empanadas</b> y <b>precios de empanadas</b>, sin olvidarnos de ambos, ya que los relacionaremos.

### ¡Empecemos! :checkered_flag:
Primero tendremos que validar los 3 argumentos, este caso: que el sumatorio de las cantidades sea menor que 40, que el total de empanadas sea divisible entre 3 y que las cantidades de empanadas sean números enteros (no se puede pedir -1 empanada, se la tendríamos que dar nosotros al vendedor).

### Vamos a lo divertido :star2:
Una vez validados los 3 argumentos, tenemos que crear una fórmula para encontrar la solución al problema principal.<br>
Teniendo en cuenta que:<br>
` a, b y c` son los valores que nos proporcionan, es decir, las cantidades de empanadas, y que ` precioA, precioB y precioC` son los precios de los tipos de empanas, es decir, 3 tipos de empanadas. AHÍ está el truco. <br>
Por lo tanto, la formula se quedaría de la siguiente forma:<br>
` ((a*precioA)+(b*precioB)+(c*precioC)/3)`  lo que dará un número que se corresponde a la salida. SIN EMBARGO, habrá que redondear a la alza el número.

## Solucionando el enunciado :end:
Como describir con palabras cómo he llegado a mi conclusión es algo complejo, dejo imágenes de cómo llegué a dicha solución primero con boligrafo y papel.

[Imagen 1](https://ibb.co/tXSRTwp)<br>
[Imagen 2](https://ibb.co/9N1z1Rr)