// input chiede email
// Array email varie
// Controllare che email sia tra le presenti
// Se presente dare conferma
// Else dare messaggio di errore

// * DADI
// numero random da 1 a 6 per pc e player
// if number player > number pc win
// else if number player < number pc lose
// else pareggio

const email = document.getElementById("email");

let risposta = document.getElementById("esito");

function invia(){

  const mail = email.value;

  let mailTrue = false;

  let mailAccettate = ["aldo@gmail.com", "giovanni@gmail.com", "giacomo@gmail.com", "franco@gmail.com", "pippo@gmail.com"];

  for (i = 0; i < mailAccettate.length; i++ ) {

      if ( mail === mailAccettate[i] ){
          mailTrue = true;
      }  
  }

  if (mailTrue === true) {
      risposta.innerHTML = `Email giusta`
  }

  else {
      risposta.innerHTML = `Ricontrolla l'email`
  }
}

// * DADI
// let giocatore = document.getElementById("player")
// let pc = document.getElementById("computer")
let risultato = document.getElementById("risultato")

let vittoriePlayer = 0;
let vittoriePc = 0;

let tueVittorie = document.getElementById("vittorieGiocatore");
let tueSconfitte = document.getElementById("sconfitteGiocatore");

function estrazioneMatta(){
  let giocatore = document.getElementById("player").innerHTML = Math.round(Math.random() * 6);
  let pc = document.getElementById("computer").innerHTML = Math.round(Math.random() * 6);
  
if (giocatore > pc) {
    risultato.innerHTML = `Vittoria`
    vittoriePlayer = vittoriePlayer + 1;
  }

  else if (giocatore < pc) {
    risultato.innerHTML = `Sconfitta`
    vittoriePc = vittoriePc + 1;
  }

  else {
    risultato.innerHTML = `Pareggio`
  }
  tueVittorie.innerHTML = `Tue vittorie: ${vittoriePlayer}`
  tueSconfitte.innerHTML = `Tue sconfitte: ${vittoriePc}`
}



