// define new variable that stores user input

let userPlay = prompt('Make your play!').toLowerCase();

/*
const getUserPlay = (input) => {
  let userPlay = input.toLowerCase();
  return userPlay;
}
*/

// computer randomly generates a value in order to makes its play from predefined options

const getComputerPlay = () => {
  let plays = ['rock', 'paper', 'scissors'];
  let randomNum = Math.floor(Math.random() * 3);
  let computerPlay = plays[randomNum];
  return computerPlay;
}


//game on!

const gameRound = () => {

  
  let computerPlay = getComputerPlay();

if (userPlay === computerPlay) {
    return 'its a tie!';
  } else if (userPlay === "scissors" && computerPlay === "rock" ) {
    return 'the computer crushed your scissors';
  } else if (userPlay === "scissors" && computerPlay === "paper" ) {
    return 'you cut the computer\'s paper!';
  } else if (userPlay === "paper" && computerPlay === "rock" ) {
    return 'you wrapped the computer\'s rock!';
  } else if (userPlay === "paper" && computerPlay === "scissors" ) {
    return 'the computer cut your paper!';
  } else if (userPlay === "rock" && computerPlay === "scissors" ) {
    return 'you crushed the computer\'s scissors!';
  } else if (userPlay === "rock" && computerPlay === "paper" ) {
    return 'the computer wrapped your rock!';
  } 

}

console.log(gameRound());

const gameOn = () => {

  let computerScore = 0;
  let userScore = 0;

  for (let i = 0; i < 6; i++) {
           if (gameRound() === 'the computer crushed your scissors') {
      computerScore += 1;
    } else if (gameRound() === 'you cut the computer\'s paper!') {
        userScore += 1;
    } else if (gameRound() === 'you wrapped the computer\'s rock!') {
        userScore += 1;
    } else if (gameRound() === 'the computer cut your paper!') {
        computerScore += 1;
    } else if (gameRound() === 'you crushed the computer\'s scissors!') {
        userScore += 1;
    } else if (gameRound() === 'the computer wrapped your rock!') {
        computerScore += 1;
    }



