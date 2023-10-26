/*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
 */

const numeroUno = parseInt(prompt("ingrese el primer numero"));
const numeroDos = parseInt(prompt("ingrese el segundo numero"));
const numeroTres = parseInt(prompt("ingrese el segundo numero"));

if (numeroUno > numeroDos && numeroUno > numeroTres) {
  document.write("El numero mayor ingresado es " + numeroUno);
} else if (numeroDos > numeroTres && numeroDos > numeroUno) {
  document.write("El numero mayor ingresado es " + numeroDos);
} else {
  document.write("El numero mayor ingresado es " + numeroTres);
}
