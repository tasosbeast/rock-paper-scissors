// This code stores the player and computer's choice, as well as the scores of each player.

let playerChoice;
let computerChoice;
let myScore = 0;
let computerScore = 0;
let rockBtnEl = document.querySelector("#rock");
let paperBtnEl = document.querySelector("#paper");
let scissorsBtnEl = document.querySelector("#scissors");
let playersInput = " ";

// Function to generate computer's choice

function getComputerChoice() {
  // Generate a random number between 0 and 2
  let randomNumber = Math.floor(Math.random() * 3);
  // Map the random number to a choice of 'Rock', 'Paper', or 'Scissors'
  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// create a function for the players choice to eliminate bugs and wrong words
function getPlayerChoice() {
  // Prompt the user to make a choice
  rockBtnEl.addEventListener("click", () => (playersInput = "Rock"));
  paperBtnEl.addEventListener("click", () => (playersInput = "Paper"));
  scissorsBtnEl.addEventListener("click", () => (playersInput = "Scissors"));
}

//create a function that plays a round and return the outcome
function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (playerChoice === "Rock" && computerChoice === "Paper") {
    computerScore++;
    return "You lost! paper beats rock";
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    myScore++;
    return "You win !!! rock wins scissors";
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    myScore++;
    return "You win !!! paper wins rock";
  } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
    computerScore++;
    return "You lost! scissors beats paper";
  } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
    computerScore++;
    return "You lost! rock beats scissors";
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    myScore++;
    return "You win !!! scissors beats paper";
  }
}

// play for 5 rounds and show the winner based on higher score
function game() {
  // Welcome messages
  console.log("Welcome to the game!");
  console.log("You are going to play 5 rounds of Rock, Paper, Scissors");
  console.log(
    "The winner is the one that has more points at the end of the 5 rounds"
  );

  // Loop 5 times for 5 rounds of the game
  // for (let i = 1; i <= 5; i++) {
  //     // Get the player's choice
  //     let playerChoice = getPlayerChoice();

  //     // Get the computer's choice
  //     let computerChoice = getComputerChoice();

  //     // Log the result of the round
  //     console.log(playRound(playerChoice, computerChoice));
  // }

  // Determine and log the overall winner
  if (myScore > computerScore) {
    console.log("You win the game!!!");
  } else if (computerScore > myScore) {
    console.log("You lost the game!!");
  } else {
    console.log("The game is a TIE!!!");
  }
}

// Start the game
// game();
