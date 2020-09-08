// define new variable that stores user input
let userPlay = window.prompt('please enter your play');

// computer randomly generates a value in order to makes its play from predefined options


  let plays = ['rock', 'paper', 'scissors'];
  let randomNum = Math.floor(Math.random() * 3);
  let computerShoot = plays[randomNum];
  

//game on!


var delay = 1000;

setTimeout(function() {

if (userPlay === computerShoot) {
    alert('its a tie!')
  } else if (userPlay === "scissors" && computerShoot === "rock" ) {
    alert('the computer crushed your scissors')
  } else if (userPlay === "scissors" && computerShoot === "paper" ) {
    alert('you cut the computer\'s paper!')
  } else if (userPlay === "paper" && computerShoot === "rock" ) {
    alert('you wrapped the computer\'s rock!')
  } else if (userPlay === "paper" && computerShoot === "scissors" ) {
    alert('the computer cut your paper!')
  } else if (userPlay === "rock" && computerShoot === "scissors" ) {
    alert('you crushed the computer\'s scissors!')
  } else if (userPlay === "rock" && computerShoot === "paper" ) {
    alert('the computer wrapped your rock!')
  } 

}, delay);


