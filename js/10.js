/**10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
 */

const numeroDivisible = parseInt(prompt("ingrese el numero"));

if (
  numeroDivisible % 2 == 0 ||
  numeroDivisible % 3 == 0 ||
  numeroDivisible % 5 == 0 ||
  numeroDivisible % 7 == 0
) {
  document.write("El numero es divisible");
} else {
  document.write("El numero no es divisible en 2 , 3 , 5 , 7");
}
