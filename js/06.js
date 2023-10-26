/*Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
 */

const numeroUno = parseInt(prompt("ingrese el primer numero"));
const numeroDos = parseInt(prompt("ingrese el segundo numero"));

if (numeroUno > numeroDos) {
  document.write("El numero mayor ingresado es " + numeroUno);
} else {
  document.write("El numero mayor ingresado es " + numeroDos);
}
