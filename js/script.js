// //ESERCIZIO 1- Scambia il contenuto di due variabili a e b, in modo che la prima contenga il valore contenuto nella seconda:

// let a = "montagna";
// let b = "mare";
// console.log("Variabile b: " + b, "Variabile a: " + a);

// const aiuto = a;
// a = b;
// b = aiuto;

// // ESERCIZIO 2- crea un alberello in console

// let rami = "";

// for (let i = 0; i < 6; i++) {
//   rami += "*";
//   console.log(rami);
// }

// let tronco = "||";

// console.log(tronco);

// // BONUS- Stampa l'albero completo:
//      ramo 1 in alto
// const ramo = [" ", " ", " ", " ", "*", " ", " ", " ", " "];
// const ramo1 =
//   ramo[0] +
//   ramo[1] +
//   ramo[2] +
//   ramo[3] +
//   ramo[4] +
//   ramo[5] +
//   ramo[6] +
//   ramo[7] +
//   ramo[8];
// console.log(ramo1);
// //      ramo 2 verso il basso
// ramo.splice(3, 1, "*");
// ramo.splice(5, 1, "*");
// const ramo2 =
//   ramo[0] +
//   ramo[1] +
//   ramo[2] +
//   ramo[3] +
//   ramo[4] +
//   ramo[5] +
//   ramo[6] +
//   ramo[7] +
//   ramo[8];
// console.log(ramo2);
// //      ramo 3 verso il basso
// ramo.splice(2, 1, "*");
// ramo.splice(6, 1, "*");
// const ramo3 =
//   ramo[0] +
//   ramo[1] +
//   ramo[2] +
//   ramo[3] +
//   ramo[4] +
//   ramo[5] +
//   ramo[6] +
//   ramo[7] +
//   ramo[8];
// console.log(ramo3);
// //      ramo 3 verso il basso
// ramo.splice(1, 1, "*");
// ramo.splice(7, 1, "*");
// const ramo4 =
//   ramo[0] +
//   ramo[1] +
//   ramo[2] +
//   ramo[3] +
//   ramo[4] +
//   ramo[5] +
//   ramo[6] +
//   ramo[7] +
//   ramo[8];
// console.log(ramo4);
// //      ramo 3 verso il basso
// ramo.splice(0, 1, "*");
// ramo.splice(8, 1, "*");
// const ramo5 =
//   ramo[0] +
//   ramo[1] +
//   ramo[2] +
//   ramo[3] +
//   ramo[4] +
//   ramo[5] +
//   ramo[6] +
//   ramo[7] +
//   ramo[8];
// console.log(ramo5);
// //      tronco
// const tronco = [" ", " ", " ", " ", "|", " ", " ", " ", " "];
// const tronco1 =
//   tronco[0] +
//   tronco[1] +
//   tronco[2] +
//   tronco[3] +
//   tronco[4] +
//   tronco[5] +
//   tronco[6] +
//   tronco[7] +
//   tronco[8];
// console.log(tronco1);

// // ESERCIZIO 2- Dato questo array di numeri crea due array, uno con tutti i numeri pari e l'altro con tutti quelli dispari

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

// // ESERCIZIO 3- Dato questo array di nomi ordinato in ordine alfabetico, trova la prima persona fuori posto.

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
// // ESERCIZIO 4- Scrivi un ciclo for che stampa in console il countdown da 10 a 0, poi trasforma il ciclo for in un ciclo while.

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

// // SNAK 1: scrivi una funzione che riceve in ingresso un array di numeri interi e un numero. La funzione conta e restituisce quante volte il numero compare nell'array

// const array = [1, 2, 5, 2, 6, 8, 3, 5, 2, 7, 9, 2];
// console.log(array);
// const randomNumberEl = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumberEl);
// let counter = parseInt(0);

// // creo una funzione che confronta i numeri che compongono l'array e il numero generato casualmente
// function findNumber(arrayName, randomNumber) {
//   for (let i = 0; i < arrayName.length; i++) {
//     if (arrayName[i] == randomNumber) {
//       counter = counter + 1;
//     }
//   }
//   let result = counter != 0;
//   return result;
// }

// if (findNumber(array, randomNumberEl)) {
//   alert("Il numero compare " + counter + " volte nell'array");
// } else {
//   alert("Il numero non compare nell'array");
// }

// // SNACK 2: chiedi all'utente un numero finchè non inserisce 0. A quel punto mostra all'utente la sonna di tutti i numeri che ha inserito

// let sum = 0;
// let userNumber;

// // creo un ciclo per generare un prompt con cui chiedo all'utente di inserire un numero, ciclo che si interrompe quando l'utente inserisce 0
// while (userNumber != 0) {
//   userNumber = parseInt(prompt("Inserisci un numero:"));
//   // controllo che l'utente inserisca un numero e se è così faccio la somma, altrimenti no
//   if (!isNaN(userNumber)) sum += userNumber;

//   console.log(userNumber);
//   console.log("La somma è: " + sum);
// }

// // stampo a schermo con un altert la somma dei numeri inseriti prima dello 0
// alert("la somma dei numeri inseriti fino a questo punto è: " + sum);

// // SNACK 3: scrivere una funzione che riceve in ingresso un array di stringhe e un carattere. La funzione ritorna una stringa con tutti gli elementi separati dal carattere (come il join).

// const animals = [
//   "pappagallo",
//   "gatto",
//   "cane",
//   "tartaruga",
//   "coniglio",
//   "criceto",
// ];
// console.log(animals);

// const separator = ", ";
// console.log("Il carattere separatore è: " + separator);

// function arrayToString(arrayName, separatorElement) {
//   let text = "";
//   for (let i = 0; i < arrayName.length; i++) {
//     if (i != arrayName.length - 1) {
//       text += arrayName[i] + separatorElement;
//     } else {
//       text += arrayName[i];
//     }
//   }

//   return text;
// }

// let text = arrayToString(animals, separator);
// console.log("Un elenco di animali domestici potrebbe essere: " + text);

// // SNACK 4: dato un array di numeri interi, calcolare il minimo
// const array = [4, 5, 2, 6, 8, 3, 1, 7, 9];
// console.log(array);
// let min = array[0];

// for (let i = 0; i < array.length; i++) {
//   if (min > array[i]) {
//     min = array[i];
//     console.log(
//       "Al giro: " + i + " Il minimo è: " + min,
//       " Comparato con il numero: " + array[i]
//     );
//   } else {
//     console.log(
//       "Al giro: " + i + " Il minimo è: " + min,
//       " Comparato con il numero: " + array[i]
//     );
//   }
// }
// console.log("Il numero minimo dell'array è: " + min);

// // SNACK 5: genera un array di 10 numeri unici in un range
// const myArray = [];

// const min = 1;
// const max = 100;
// // creo delle costanti che mi permettano di controllare che il min e max inseriti nella funzione più avanti, non mettano a disposizione un numero di numeri minore di 10, perchè altrimenti si creerebbe un ciclo infinito
// const offset = max - min;
// const elementNumber = 10;

// // creo una funzione per generare un numero casuale
// function generateRandomNumber(min, max) {
//   arrayElement = Math.floor(Math.random() * (max + min - 1) + 1);
//   console.log(arrayElement);
//   return arrayElement;
// }

// // controllo che il numero degli elementi dell'array sia sempre almeno 10
// if (offset > elementNumber) {
//   // creo un ciclo per invocare la funzione che genera un numero randomico per 10 volte
//   while (myArray.length < 10) {
//     randomArrayElement = generateRandomNumber(1, 91);
//     // controllo che il numero casuale generato non sia già presente nell'array e se vero, lo aggiungo all'array
//     if (!myArray.includes(randomArrayElement)) {
//       myArray.push(randomArrayElement);
//     }
//   }
// }
// // in console stampo il nuovo array
// console.table(myArray);
