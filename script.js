const winMap = {
  Rock: "Scissors",
  Paper: "Rock",
  Scissors: "Paper",
};
const choices = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function getHumanChoice() {
  while (true) {
    let humanPrompt = prompt("Rock, Paper or Scissors?").trim();
    const formattedChoice =
      humanPrompt[0].toUpperCase() + humanPrompt.slice(1).toLowerCase();

    if (choices.includes(formattedChoice)) {
      return formattedChoice;
    } else {
      alert("Invalid Choice, Please enter Rock, Paper or Scissors");
    }
  }
}

function playGame() {
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
  let humanSelection;
  let computerSelection;
  for (let i = 0; i < 5; i++) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    console.log("Human win the Game");
  } else if (computerScore > humanScore) {
    console.log("Computer win the Game");
  }
}

playGame();
