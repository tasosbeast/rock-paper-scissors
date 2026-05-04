let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice;
  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }
  return computerChoice;
}

function getHumanChoice() {
  return prompt("rock, paper or scissors?").toLowerCase();
}

function playRound(human, computer) {
  if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    console.log(`You win computer picked ${computer}`);
    humanScore++;
  } else if (human === computer) {
    console.log(`its tie both picked  ${computer}`);
  } else {
    console.log(`you lose computer picked ${computer}`);
    computerScore++;
  }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
