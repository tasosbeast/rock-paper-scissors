let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "Rock";
  } else if (randomNumber === 2) {
    return "Paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanPrompt = prompt("Rock, Paper or Scissors?");
  return humanPrompt[0].toUpperCase() + humanPrompt.slice(1).toLowerCase();
}

function playRound(human, computer) {
  console.log(human, computer);
  if (
    (human === "Rock" && computer === "Rock") ||
    (human === "Paper" && computer === "Paper") ||
    (human === "Scissors" && computer === "Scissors")
  ) {
    console.log("Game is Draw");
  } else if (
    (human === "Rock" && computer === "Scissors") ||
    (human === "Paper" && computer === "Rock") ||
    (human === "Scissors" && computer === "Paper")
  ) {
    humanScore++;
    console.log(`You win ${human} beats ${computer}`);
  } else if (
    (computer === "Rock" && human === "Scissors") ||
    (computer === "Paper" && human === "Rock") ||
    (computer === "Scissors" && human === "Paper")
  ) {
    computerScore++;
    console.log(`You lose ${computer} wins ${human}`);
  } else {
    console.log("Wrong Choice");
  }
}

playRound(humanSelection, computerSelection);
