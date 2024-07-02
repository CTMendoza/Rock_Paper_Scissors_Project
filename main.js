// psuedocode
// Step 1: Write logic to get the computers choice
//  . create a function called getComputerChoice
//  . function should return one of the following string values: `rock`, `paper` or `scissors`
//  .  use random method conditionally to return one of the string values
//  . if equal to 0 return rock
//  . if equal to 1 return paper
//  . if equal to 2 return scissor
function getComputerChoice () {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return `rock`
    } else if (random === 1) {
        return `paper`
    } else if(random === 2) {
        return `scissors`}
}

// Step 2: Write the logic to get the human choice
// . create function called getHumanChoice
// . get users choice by using the prompt method
// . return  prompt method value
function getHumanChoice(e) {
   return e;
}

// Step 3: Declare the players score variable
// declare variable for the humanScore
// declare variable for the computerScore
// initialize both variables with a value of 0
let humanScore = 0;
let computerScore = 0;

// Step 4: Write the logic to play a single round
/* Your game will be played round by round.
 You will write a function that takes
 the human and computer player choices as arguments,
 plays a single round, increments the round winner’s 
 score and logs a winner announcement.
*/
// create function named playRound
// define two parameters, humanChoice and computerChoice
// humanChoice parameter should be case-insensitive
// increment humanScore or computerScore variables based on around winner
function playRound(humanChoice, computerChoice) {
    console.log(`human choice: ${humanChoice}`);
    console.log(`computer choice: ${computerChoice}`);
  if(humanChoice === computerChoice) {
    score.textContent = `It's a draw! Score: Human: ${humanScore} Computer: ${computerScore}`
    console.log(`It's a draw!`);
    console.log(`Score: Human: ${humanScore}, Computer ${computerScore}`);
  }  else if ((humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')) {
    humanScore ++;
    score.textContent = `Human wins this round! Score: Human: ${humanScore} Computer: ${computerScore} `
    console.log(`Human wins this round!`)
    console.log(`Score: Human: ${humanScore}, Computer ${computerScore}`);
  } else if ((computerChoice === 'paper' && humanChoice === 'rock') ||
    (computerChoice === 'rock' && humanChoice === 'scissors') ||
    (computerChoice === 'scissors' && humanChoice === 'paper')) {
    computerScore ++;
    score.textContent = `Computer wins this round! Score: Human: ${humanScore} Computer: ${computerScore} `
    console.log(`Computer wins this round!`)
    console.log(`Score: Human: ${humanScore}, Computer ${computerScore}`);
  } 
}

// select div #score and div #result
let score = document.querySelector('#score');
let result = document.querySelector('#result');


let rockBttn = document.querySelector('.rock');
let paperBttn = document.querySelector('.paper');
let scissorsBttn = document.querySelector('.scissors');

//clicking on buttons will call the playRound function 
rockBttn.addEventListener('click', (e)=> playRound(getHumanChoice(e.target.className), getComputerChoice()));
paperBttn.addEventListener('click',  (e)=> playRound(getHumanChoice(e.target.className), getComputerChoice()));
scissorsBttn.addEventListener('click',  (e)=> playRound(getHumanChoice(e.target.className), getComputerChoice()));


// Step 5: Write the logic to play the entire game
// . create a new function named playGame

// function playGame () {
//     playRound(getHumanChoice(), getComputerChoice());
//     playRound(getHumanChoice(), getComputerChoice());
//     playRound(getHumanChoice(), getComputerChoice());
//     playRound(getHumanChoice(), getComputerChoice());
//     playRound(getHumanChoice(), getComputerChoice());
// }

// playGame();