
// computer randomly generates a value in order to makes its play from predefined options

const getComputerPlay = () => {
  let plays = ['rock', 'paper', 'scissors'];
  let randomNum = Math.floor(Math.random() * 3);
  let computerPlay = plays[randomNum];
  return computerPlay;
}



// define new variables that store scores and winner status for final display

let computerScore = 0;
let userScore = 0;
let winnerToggle = 0;



//game on!

const gameRound = (play) => {
  
  let userPlay = play;
  let computerPlay = getComputerPlay();

if (userPlay === computerPlay) {
    winnerToggle = 0;

  } else if (userPlay === "scissors" && computerPlay === "rock" ) {
    winnerToggle = -1;
    computerScore += 1;
    return (`${computerPlay} beats ${userPlay}`);

  } else if (userPlay === "scissors" && computerPlay === "paper" ) {
    winnerToggle = 1;
    userScore += 1;
    return (`${userPlay} beats ${computerPlay}`);

  } else if (userPlay === "paper" && computerPlay === "rock" ) {
    winnerToggle = 1;
    userScore += 1;
    return (`${userPlay} beats ${computerPlay}`);

  } else if (userPlay === "paper" && computerPlay === "scissors" ) {
    winnerToggle = -1;
    computerScore += 1;
    return (`${computerPlay} beats ${userPlay}`);

  } else if (userPlay === "rock" && computerPlay === "scissors" ) {
    winnerToggle = 1;
    userScore += 1;
    return (`${userPlay} beats ${computerPlay}`);

  } else if (userPlay === "rock" && computerPlay === "paper" ) {
    winnerToggle = -1;
    computerScore += 1;
    return (`${computerPlay} beats ${userPlay}`);
  } 
}


// score keeping function w/ outputs

const keepScore = () => {
  if (computerScore > userScore) {
    return `The computer beat you! ${computerScore} to ${userScore}!`
  } else if (computerScore < userScore) { 
    return `You beat the computer! ${userScore} to ${computerScore}`
  } else { 
    return `0 - 0`;
  }
}

// post result function

const postResult = (input) => {
  
    if (winnerToggle === 1) {
      return `${input} beats ${computerPlay}... you win!`;
    } else if (winnerToggle === -1) {
      return `${computerPlay} beats ${input}... you lose!`;
    } else {return `It's a tie... ${input} and ${computerPlay}`;
  }
}

// hide middle graphic onclick

const hideMiddle = () => {
  middle.style.display = 'none';
}

// show userPlay's image onclick

const showUserPlay = (play) => {
  let userPlayImg = document.querySelector('#userPlay');
  userPlay.style.background = `/images.${play}.png`;
  userPlayImg.classList.add('.userPlayImg');  
}

// show computerPlay's image onclick

const showComputerPlay = () => {

}

// show score result with text 

const showResult = () => {

}

// define buttons

let middle = document.querySelector('#middle');
let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');


// add events to buttons

rockBtn.addEventListener('click', () => {  

    gameRound('rock');
    postResult('rock');
    hideMiddle();
    showUserPlay('rock');
    showComputerPlay();
    showResult();
  }
);

paperBtn.addEventListener('click', () => {

    gameRound('paper');
    postResult('paper');
    hideMiddle();
    showUserPlay('paper');
    showComputerPlay();
    showResult();
  }
);

scissorsBtn.addEventListener('click', () => {

    gameRound('scissors');
    postResult('scissors');
    hideMiddle();
    showUserPlay('scissors');
    showComputerPlay();
    showResult();
  }
);





// 5 game sequence function
/*
const gameOn = () => {
  for (let i = 0; i < 6; i++) {
    gameRound();
    if (winnerToggle === 1) {
  
      console.log('You won this round!');
    } else if (winnerToggle === -1) { 
      console.log('You lost this round!')
    } else {console.log('you tied this round!')}
    console.log(`User: ${userScore} Computer: ${computerScore}`);
  }
}
*/

console.log(gameOn());
console.log(keepScore());











