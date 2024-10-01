const winMap = {
  Rock: "Scissors",
  Paper: "Rock",
  Scissors: "Paper",
};
const choices = Object.keys(winMap);
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
  function playRound(humanChoice, computerChoice) {
    console.log(humanChoice, computerChoice);

    if (humanChoice === computerChoice) {
      console.log("Game is Draw");
    } else if (winMap[humanChoice] === computerChoice) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  let humanSelection;
  let computerSelection;
  for (let i = 0; i < 5; i++) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    alert(`Computer choose: ${computerSelection}
 Human: ${humanScore} Computer: ${computerScore}`);
  }
  if (humanScore > computerScore) {
    alert("Human win the Game");
  } else if (computerScore > humanScore) {
    alert("Computer win the Game");
  } else {
    alert("Game is Draw");
  }
}

playGame();
