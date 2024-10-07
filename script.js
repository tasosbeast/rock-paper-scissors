// DOM elements
const btnRules = document.querySelector(".rules-btn");
const btnClose = document.querySelector(".close-btn");
const modalRules = document.querySelector(".modal");

// Show/hide modal
btnRules.addEventListener("click", () =>
  modalRules.classList.add("show-modal")
);

btnClose.addEventListener("click", () =>
  modalRules.classList.remove("show-modal")
);
/**
 *
 * Implements a simple Rock-Paper-Scissors game where the user plays against the computer.
 * The game is played over 5 rounds, with the winner determined by the total score.
 */
const winMap = {
  Rock: "Scissors",
  Paper: "Rock",
  Scissors: "Paper",
};
const choices = Object.keys(winMap);
const gameState = { human: 0, computer: 0 };

const getComputerChoice = () =>
  choices[Math.floor(Math.random() * choices.length)];

const getHumanChoice = () => {
  do {
    const humanPrompt = prompt("Rock, Paper or Scissors?").trim();
    const formattedChoice =
      humanPrompt[0].toUpperCase() + humanPrompt.slice(1).toLowerCase();
    if (choices.includes(formattedChoice)) return formattedChoice;
    alert("Invalid Choice, Please enter Rock, Paper or Scissors");
  } while (true);
};

const playRound = (humanChoice, computerChoice) => {
  console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`);
  if (humanChoice === computerChoice) {
    console.log("Game is Draw");
  } else if (winMap[humanChoice] === computerChoice) {
    gameState.human++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    gameState.computer++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
};

const ROUNDS_PER_GAME = 5;
function playGame() {
  for (let i = 0; i < ROUNDS_PER_GAME; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    alert(
      `Computer choose: ${computerSelection}\nHuman: ${gameState.human} Computer: ${gameState.computer}`
    );
  }
  if (gameState.human > gameState.computer) {
    alert("Human win the Game");
  } else if (gameState.computer > gameState.human) {
    alert("Computer win the Game");
  } else {
    alert("Game is Draw");
  }
}

playGame();
