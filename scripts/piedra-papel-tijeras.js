
let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, ties: 0, loses: 0 };

updateScore()

function playGame(playerMov) {
  const maquina = peekComputerMov();
  resultado = '';
  if (playerMov === 'Tijeras') {
    if (maquina === 'Piedra') { resultado = 'Perdiste' }
    else if (maquina === 'Papel') { resultado = 'Ganaste' }
    else if (maquina === 'Tijeras') { resultado = 'Empate' }
    scores(resultado)
    show(resultado, playerMov, maquina)

  } else if (playerMov === 'Papel') {
    if (maquina === 'Piedra') {
      resultado = 'Ganaste'
    } else if (maquina === 'Papel') {
      resultado = 'Empate'
    }
    else if (maquina === 'Tijeras') {
      resultado = 'Perdiste'
    }
    scores(resultado)
    show(resultado, playerMov, maquina)

  } else if (playerMov === 'Piedra') {
    if (maquina === 'Piedra') {
      resultado = 'Empate'
    } else if (maquina === 'Papel') {
      resultado = 'Perdiste'
    }
    else if (maquina === 'Tijeras') {
      resultado = 'Ganaste'
    }
    scores(resultado)

    localStorage.setItem('score', JSON.stringify(score));
    show(resultado, playerMov, maquina)


    //         alert(`Escogiste ${playerMov}, la maquina escogió ${maquina}, ${resultado}
    // wins: ${score.wins} ties: ${score.ties} losses: ${score.loses}`);
  }

}
function show(resultado, playerMov, maquina) {
  document.querySelector('.js-result').innerHTML = resultado;
  document.querySelector('.js-move').innerHTML = `Tú: 
<img src="images/${playerMov}.jpg" alt="piedra" class="move-icon">
La maquina: 
<img src="images/${maquina}.jpg" alt="tijera" class="move-icon">`;
}
function scores(resultado) {
  if (resultado === 'Ganaste') {
    score.wins++
  }
  else if (resultado === 'Perdiste') { score.loses++ }
  else if (resultado === 'Empate') { score.ties++ }

  return score
};

function peekComputerMov() {
  let randomNumber1 = Math.random();
  let maquinaMov = '';

  if (randomNumber1 >= 0 && randomNumber1 < 1 / 3) { maquinaMov = 'Piedra' }
  else if (randomNumber1 >= 1 / 3 && randomNumber1 < 2 / 3) { maquinaMov = 'Papel' }
  else if (randomNumber1 >= 2 / 3 && randomNumber1 < 1) { maquinaMov = 'Tijeras' }
  return maquinaMov;
}
function verificarLocalStorage() {
  try {
    let prueba = 'prueba';
    localStorage.setItem(prueba, prueba);
    localStorage.removeItem(prueba);
    console.log("localStorage está disponible");
  } catch (e) {
    console.error("localStorage no está disponible", e);
  }
}

verificarLocalStorage();
function updateScore() {
  document.querySelector('.js-score')
    .innerHTML = `wins: ${score.wins} ties: ${score.ties} losses: ${score.loses}`;
}

