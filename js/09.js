/**Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt
 */

const vocales = ["a", "e", "i", "o", "u"];

const frase = prompt("ingrese una frase");
const fraseEnMinusculas = frase.toLowerCase();
let vocalesFinale = [];

for (let i = 0; i < fraseEnMinusculas.length; i++) {
  if (vocales.includes(fraseEnMinusculas[i])) {
    vocalesFinale.push(fraseEnMinusculas[i]);
  }
}
document.write("Las vocales encontradas son " + vocalesFinale);
