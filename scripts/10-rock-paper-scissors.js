let score = JSON.parse(localStorage.getItem('score')) ||{
  wins: 0,
  loses: 0,
  ties: 0
};

updatescoreElement();

/*
if(score === null){
  score ={
  wins: 0,
  loses: 0,
  ties: 0
  };
}
*/

function playGame(playerMove){
  let computerMove = pickComputerMove();
  let result = '';

  if(playerMove === 'SCISSORS'){
    if(computerMove === 'ROCK'){
      result = 'You loose!!!';
    }
    else if(computerMove === 'PAPER'){
      result = 'You win!!!';
    }
    else if(computerMove = 'SCISSORS'){
      result = 'Tie!!!';
    }
  }

  else if(playerMove === 'PAPER'){
    if(computerMove === 'ROCK'){ 
    result = 'You win!!!';
    }
    else if(computerMove === 'PAPER'){
    result = 'Tie!!!';
    }
    else if(computerMove = 'SCISSORS'){
    result = 'You loose!!!';
    }
  }

  else if(playerMove === 'ROCK'){
    if(computerMove === 'ROCK'){
      result = 'Tie!!!';
    }
    else if(computerMove === 'PAPER'){
      result = 'You loose!!!';
    }
    else if(computerMove = 'SCISSORS'){
      result = 'You win!!!';
    }
  }

  if(result === 'You win!!!'){
    score.wins += 1;
  }
  else if(result === 'You loose!!!'){
    score.loses += 1;
  }
  else if(result === 'Tie!!!'){
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updatescoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You 
  <img src="pix/${playerMove}-emoji.png" class="move-icon">
  <img src="pix/${computerMove}-emoji.png" class="move-icon">
  Computer`;

}

function updatescoreElement(){
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}. Loses: ${score.loses}. Ties: ${score.ties}`
}

function pickComputerMove(){

let computerMove = '';

let randomNumber = Math.random();

if(randomNumber >= 0 && randomNumber < 1 / 3){
computerMove = 'ROCK';
}
else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3){
  computerMove = 'PAPER';
}
else if(randomNumber >= 2 / 3 && randomNumber < 1){
  computerMove = 'SCISSORS';
}

return computerMove;

}