// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// 1)Generare un numero random da 1 a 16, sia per il giocatore sia per il computer.

var numeroGiocatore = Math.floor(Math.random() * 6);
var numeroComputer = Math.floor(Math.random() * 6);

//2) Stabilire il vincitore, in base a chi fa il punteggio più alto.