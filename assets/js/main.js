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

