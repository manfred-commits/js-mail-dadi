// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// 1)Generare un numero random da 1 a 16, sia per il giocatore sia per il computer.

var numeroGiocatore = Math.floor(Math.random() * 6);
var numeroComputer = Math.floor(Math.random() * 6);

//2) Stabilire il vincitore, in base a chi fa il punteggio più alto.
if(numeroGiocatore>numeroComputer){
    alert("Il numero del giocatore è " + numeroGiocatore + ", numero superiore al numero del computer: "+ numeroComputer + "\nIl giocatore ha vinto!!!");
}else if(numeroGiocatore<numeroComputer){
    alert("Il numero del computer è " + numeroComputer + ", numero superiore al numero del Giocatore: "+ numeroGiocatore + "\nIl computer ha vinto!!!");

}else{
    alert("Il giocatore ed il computer hanno lo stesso numero" + "\n'numero computer: "+numeroComputer +"' 'numero giocatore: "+numeroGiocatore+"'\nVINCE IL CASO!!!");
}