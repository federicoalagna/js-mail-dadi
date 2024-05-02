'use strict'

//array coi numeri del dado
const numeriDado = [1, 2, 3, 4, 5, 6];


// Chiedo all'utente di inserire un numero (simulando il lancio di un dado)
const numeroGiocatore = parseInt(prompt("Inserisci un numero da 1 a 6"));
console.log("Il tuo numero: " + numeroGiocatore);

// Genero un numero casuale per il computer (simula il lancio di un dado)
var numeroComputer = Math.floor(Math.random() * 6) + 1;
console.log("Numero del computer: " + numeroComputer);

// Confronta i numeri del giocatore e del computer e stampa il risultato sulla console
if (numeroGiocatore > numeroComputer) {
    console.log("Hai vinto! Il tuo numero è maggiore.");
  } else if (numeroComputer > numeroGiocatore) {
    console.log("Il computer ha vinto. Il numero del computer è maggiore.");
  } else {
    console.log("Pareggio. Entrambi avete ottenuto lo stesso numero.");
  }