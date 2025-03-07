/* Funcion recursiva que me permita crear en consola la siguiente figura 
----------#
---------##
--------###
-------####
------#####
-----######
----#######
---########
--#########
-##########
########### 
*/

function imprimirTriangulo(filas, i = 1) {
  if (i > filas) return; // Condición de salida de la recursión

  // Crear la línea combinando los espacios y los '#'
  let linea = ' '.repeat(filas - i) + '#'.repeat(i);

  // Imprimir la línea
  console.log(linea);

  // Llamada recursiva para la siguiente fila
  imprimirTriangulo(filas, i + 1);
}

// Llamar a la función con el número de filas
imprimirTriangulo(11);
