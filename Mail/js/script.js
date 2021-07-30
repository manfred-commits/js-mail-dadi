// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// 1)Chiedi all’utente la sua email
var emailUtente = prompt("Inserisci l'email che si desidera verificare: ");
// 2)controlla che sia nella lista di chi può accedere
// 2.1)questo passaggio richiede in primo luoga che ci sia un array contenente una lista di email
var listaDiEmail= ["fabriziomadrigali@gmail.com","alessandromastrobbattista@gmail.com","fabriziolodigiani@gmail.com","gianpippogianpappo@gmail.com"];
// 2.2) in secondo luogo richiede che vi sia un ciclo for con una condizione che verifichi la presenza dell'email inserita dall'utente nella nostra lista di email
var presenza = false;
for(var i=0; i<=listaDiEmail.length; i++){
    if(emailUtente==listaDiEmail[i]){
        alert("La tua email '" + emailUtente + "' è nella lista");
    }
}
if(presenza==false){
    alert("La tua email '" + emailUtente + "' NON è in lista");

}