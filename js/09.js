/**Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt
 */

const vocales = ["a", "e", "i", "o", "u"];

const frase = prompt("ingrese una frase");
let vocalesFinale = [];

for (let i = 0; i < frase.length; i++) {
  if (vocales.includes(frase.charAt(i))) {
    vocalesFinale.push(frase[i]);
  }
}
document.write("Las vocales encontradas son " + vocalesFinale);
