/*Escribe un programa que pida un número y diga si es divisible por 2
 */

const numeroDivisible = parseInt(prompt("ingrese el primer numero"));
if (numeroDivisible % 2 == 0) {
  document.write("El numero es divisible en 2");
} else {
  document.write("El numero no es divisible en 2");
}
