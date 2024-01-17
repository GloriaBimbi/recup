// ESERCIZIO 1- Scambia il contenuto di due variabili a e b, in modo che la prima contenga il valore contenuto nella seconda:

// let a = "montagna";
// let b = "mare";
// console.log("Variabile b: " + b, "Variabile a: " + a);

// const aiuto = a;
// a = b;
// b = aiuto;

// ESERCIZIO 2- crea un alberello in console

// let rami = "";

// for (let i = 0; i < 6; i++) {
//   rami += "*";
//   console.log(rami);
// }

// let tronco = "||";

// console.log(tronco);

// BONUS- Stampa l'albero completo:
//      ramo 1 in alto
const ramo = [" ", " ", " ", " ", "*", " ", " ", " ", " "];
const ramo1 =
  ramo[0] +
  ramo[1] +
  ramo[2] +
  ramo[3] +
  ramo[4] +
  ramo[5] +
  ramo[6] +
  ramo[7] +
  ramo[8];
console.log(ramo1);
//      ramo 2 verso il basso
ramo.splice(3, 1, "*");
ramo.splice(5, 1, "*");
const ramo2 =
  ramo[0] +
  ramo[1] +
  ramo[2] +
  ramo[3] +
  ramo[4] +
  ramo[5] +
  ramo[6] +
  ramo[7] +
  ramo[8];
console.log(ramo2);
//      ramo 3 verso il basso
ramo.splice(2, 1, "*");
ramo.splice(6, 1, "*");
const ramo3 =
  ramo[0] +
  ramo[1] +
  ramo[2] +
  ramo[3] +
  ramo[4] +
  ramo[5] +
  ramo[6] +
  ramo[7] +
  ramo[8];
console.log(ramo3);
//      ramo 3 verso il basso
ramo.splice(1, 1, "*");
ramo.splice(7, 1, "*");
const ramo4 =
  ramo[0] +
  ramo[1] +
  ramo[2] +
  ramo[3] +
  ramo[4] +
  ramo[5] +
  ramo[6] +
  ramo[7] +
  ramo[8];
console.log(ramo4);
//      ramo 3 verso il basso
ramo.splice(0, 1, "*");
ramo.splice(8, 1, "*");
const ramo5 =
  ramo[0] +
  ramo[1] +
  ramo[2] +
  ramo[3] +
  ramo[4] +
  ramo[5] +
  ramo[6] +
  ramo[7] +
  ramo[8];
console.log(ramo5);
//      tronco
const tronco = [" ", " ", " ", " ", "|", " ", " ", " ", " "];
const tronco1 =
  tronco[0] +
  tronco[1] +
  tronco[2] +
  tronco[3] +
  tronco[4] +
  tronco[5] +
  tronco[6] +
  tronco[7] +
  tronco[8];
console.log(tronco1);

// ESERCIZIO 2- Dato questo array di numeri crea due array, uno con tutti i numeri pari e l'altro con tutti quelli dispari

// const nomi = [4, 5, 3, 1, 11, 21, 23, 0, 2, 44, 19, 99, 100, 2, 3, 1];
// const pari = [];
// const dispari = [];

// for (let i = 0; i < nomi.length; i++) {
//   if (nomi[i] % 2 == 0) {
//     pari.push(nomi[i]);
//   } else {
//     dispari.push(nomi[i]);
//   }
// }

// console.log("array pari: " + pari);
// console.log("array dispari: " + dispari);

// ESERCIZIO 3- Dato questo array di nomi ordinato in ordine alfabetico, trova la prima persona fuori posto.

// const nomi = [
//   "Amelia",
//   "Ciro",
//   "Edoardo",
//   "Giovanni",
//   "Guido",
//   "Lucia",
//   "Marco",
//   "Bastiano",
//   "Ottavia",
//   "Zeno",
// ];
// console.log(nomi);

// let nomeMaggiore = "";
// let nomeMinore = "";

// let i = 0;
// while (nomi[i] < nomi[i + 1]) {
//   console.log(nomi[i], nomi[i + 1]);
//   nomeMaggiore = nomi[i + 1];
//   nomeMinore = nomi[i + 1 + 1];
//   i++;
// }

// alert(
//   `Il nome ${nomeMinore} in ordine alfabetico andrebbe prima rispetto a ${nomeMaggiore}`
// );

// }
// ESERCIZIO 4- Scrivi un ciclo for che stampa in console il countdown da 10 a 0, poi trasforma il ciclo for in un ciclo while.

// // lo risolvo con un ciclo for
// for (i = 10; i >= 0; i--) {
//   let numero = i;
//   console.log(numero);
// }

// // lo risolvo con un ciclo while
// let i = 10;
// while (i >= 0) {
//   let numero = i;
//   console.log(numero);
//   i--;
// }
