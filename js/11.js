/**11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
 */
const numeroDivisible = parseInt(prompt("ingrese el numero"));

if (numeroDivisible % 2 == 0) {
  document.write("<p>El numero " + numeroDivisible + " es divisible en 2</p>");
}
if (numeroDivisible % 3 == 0) {
  document.write("<p>El numero " + numeroDivisible + " es divisible en 3</p>");
}
if (numeroDivisible % 5 == 0) {
  document.write("<p>El numero " + numeroDivisible + " es divisible en 5</p>");
}
if (numeroDivisible % 7 == 0) {
  document.write("<p>El numero " + numeroDivisible + " es divisible en 7</p>");
}
