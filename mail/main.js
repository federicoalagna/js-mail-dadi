'use strict'


//chiedo all'utente di inserire la sua email utilizzando la funzione prompt
const userEmail = prompt("Inserisci la tua email:");
console.log("Email inserita: " + userEmail);

//--creo una lista di email di chi può accedere al programma (array)
const listaEmail = ["aldo@gmail.com", "giovanni@gmail.com", "giacomo@gmail.com"];

//creo un ciclo per stabilire tutte le email autorizzate in console
console.log("Lista email di chi può accedere:");
for (let i = 0; i < listaEmail.length; i++) {
    console.log(listaEmail[i]);
}

// Utilizzo un'istruzione condizionale per controllare se l'email inserita è presente nella lista di chi può accedere
if (listaEmail.includes(userEmail)) {

    // Se l'email è nella lista, stampo un messaggio appropriato utilizzando la funzione console.log
    console.log("Accesso autorizzato");

} else {

    // Se l'email non è nella lista, stampo un altro messaggio appropriato
    console.log("Accesso negato");
}
