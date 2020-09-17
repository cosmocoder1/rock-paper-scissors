// define new variables that store scores and winner status for final display

var computerPlay;
var winnerToggle = 0;
var userScore = 0;
var computerScore = 0;

// computer randomly generates a value in order to makes its play from predefined options

const getComputerPlay = () => {
  let plays = ['rock', 'paper', 'scissors'];
  let randomNum = Math.floor(Math.random() * 3);
  computerPlay = plays[randomNum];
}


//game on!

const gameRound = (play, computerPlay) => {

  
  let userPlay = play;

if (userPlay === computerPlay) {
    winnerToggle = 0;

  } else if (userPlay === "scissors" && computerPlay === "rock" ) {
    winnerToggle = -1;

  } else if (userPlay === "scissors" && computerPlay === "paper" ) {
    winnerToggle = 1;
    
  } else if (userPlay === "paper" && computerPlay === "rock" ) {
    winnerToggle = 1;

  } else if (userPlay === "paper" && computerPlay === "scissors" ) {
    winnerToggle = -1;

  } else if (userPlay === "rock" && computerPlay === "scissors" ) {
    winnerToggle = 1;

  } else if (userPlay === "rock" && computerPlay === "paper" ) {
    winnerToggle = -1;
  }
}


// applause function 

const audioResponse = (sound) => {
  var path = "audio/";
  var snd = new Audio(path + sound + ".wav");
  snd.play();
}


// post result function

const postResult = (input) => {
    
    if (winnerToggle === 1) {
      let result = document.querySelector('#result');
      result.innerHTML = `${input} beats ${computerPlay}... you win!`;
      audioResponse('applause');
      
    } else if (winnerToggle === -1) {
      result.innerHTML = `${computerPlay} beats ${input}... you lose!`;

    } else {result.innerHTML = `It's a tie... ${input} and ${computerPlay}`;
  }
}


// hide/show middle graphic onclick

const hideMiddle = () => {
  middle.style.display = 'none';
  score.style.display = 'none';
  setTimeout(function(){middle.style.display = 'block';score.style.display = "block"}, 3000);
}

// hide/show score


const scoreKeep = () => {
  if (winnerToggle === 1) {
    userScore += 1;
  } else if (winnerToggle === -1) {
    computerScore += 1;
  } 
  score.innerHTML = `you : ${userScore} \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 computer : ${computerScore}`;
}


// hide/show buttons

const hideButtons = () => {
  buttons.style.display = 'none';
  setTimeout(function(){buttons.style.display = 'flex'}, 3000);
}


// show/hide userPlay's image onclick

const showUserPlay = (play) => {
  let userPlayImg = document.querySelector('.userPlay');
  userPlayImg.src = `/images/${play}U.png`;
  setTimeout(function(){userPlayImg.src = ''}, 3000);
}


// show/hide computerPlay's image onclick

const showComputerPlay = () => {
  let computerPlayImg = document.querySelector('.computerPlay');
  computerPlayImg.src = `/images/${computerPlay}C.png`;
  setTimeout(function(){computerPlayImg.src = ''}, 3000);
}


// show/hide score result with text 

const showResult = () => {
  result.style.display = 'block';
  setTimeout(function(){result.style.display = 'none'}, 3000);
}


// define buttons

let buttons = document.querySelector('.buttons');
let middle = document.querySelector('.middle');
let score = document.querySelector('#score');
let game = document.querySelector('#gameOutcome');
let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');

// reload page

const reload = () => {
  document.location.reload();
}

const refresh = () => {
    if (computerScore === 3 || userScore === 3) {
      setTimeout(function () {
        if (userScore > computerScore) {
          game.innerHTML = "you're the winner!"
        } else if (userScore < computerScore) {
          game.innerHTML = 'the computer is the winner...'
        }
      }, 1000);
    }
    setTimeout(reload, 3000);
}

// add events to buttons

rockBtn.addEventListener('click', () => {  
    
  
    getComputerPlay();
    gameRound('rock', computerPlay);
    scoreKeep();
    postResult('rock');
    hideMiddle();
    hideButtons();
    showUserPlay('rock');
    showComputerPlay();
    showResult();
    /*
    refresh();
    */
  }
);

paperBtn.addEventListener('click', () => {
    
    getComputerPlay();
    gameRound('paper', computerPlay);
    scoreKeep();
    postResult('paper');
    hideMiddle();
    hideButtons();
    showUserPlay('paper');
    showComputerPlay();
    showResult();
    /*
    refresh();
    */
  }
);

scissorsBtn.addEventListener('click', () => {
    
    getComputerPlay();
    gameRound('scissors', computerPlay);
    scoreKeep();
    postResult('scissors');
    hideMiddle();
    hideButtons();
    showUserPlay('scissors');
    showComputerPlay();
    showResult();
    /*
    refresh();
    */
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












