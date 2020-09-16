
// computer randomly generates a value in order to makes its play from predefined options

const getComputerPlay = () => {
  let plays = ['rock', 'paper', 'scissors'];
  let randomNum = Math.floor(Math.random() * 3);
  let computerPlay = plays[randomNum];
  return computerPlay;
}


// define new variables that store scores and winner status for final display

var computerPlay = getComputerPlay();
var winnerToggle = 0;


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

// hide middle graphic onclick

const hideMiddle = () => {
  middle.style.display = 'none';
}

const hideButtons = () => {
  buttons.style.display = 'none';
}

// show userPlay's image onclick

const showUserPlay = (play) => {
  let userPlayImg = document.querySelector('.userPlay');
  userPlayImg.src = `/images/${play}U.png`;
}

// show computerPlay's image onclick

const showComputerPlay = () => {
  let computerPlayImg = document.querySelector('.computerPlay');
  computerPlayImg.src = `/images/${computerPlay}C.png`;
}

// show score result with text 

const showResult = () => {
  result.style.display = 'block';
}

// define buttons

let buttons = document.querySelector('.buttons');
let middle = document.querySelector('#middle');
let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');

// reload page

const reload = () => {
  document.location.reload();
}

const refresh = () => {
  setTimeout(reload, 3000);

}

// add events to buttons

rockBtn.addEventListener('click', () => {  
    
    gameRound('rock', computerPlay);
    postResult('rock');
    hideMiddle();
    hideButtons();
    showUserPlay('rock');
    showComputerPlay();
    showResult();
    refresh();
  }
);

paperBtn.addEventListener('click', () => {
    
    gameRound('paper', computerPlay);
    postResult('paper');
    hideMiddle();
    hideButtons();
    showUserPlay('paper');
    showComputerPlay();
    showResult();
    refresh();
  }
);

scissorsBtn.addEventListener('click', () => {
    
    gameRound('scissors', computerPlay);
    postResult('scissors');
    hideMiddle();
    hideButtons();
    showUserPlay('scissors');
    showComputerPlay();
    showResult();
    refresh();
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













