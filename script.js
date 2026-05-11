let humanScore = 0;
let computerScore = 0;
const winningScore = 5;
const defaultMessage = "Make your move to start.";

const choiceButtons = document.querySelectorAll(".choice-button");
const restartButton = document.querySelector("#restart-button");
const resultsPanel = document.querySelector("#results");
const humanScorePanel = document.querySelector("#human-score");
const computerScorePanel = document.querySelector("#computer-score");

function updateScorePanel() {
  humanScorePanel.textContent = humanScore;
  computerScorePanel.textContent = computerScore;
}

function isGameOver() {
  return humanScore >= winningScore || computerScore >= winningScore;
}

function disableButtons() {
  choiceButtons.forEach((button) => {
    button.disabled = true;
  });
}

function enableButtons() {
  choiceButtons.forEach((button) => {
    button.disabled = false;
  });
}

function endGame() {
  resultsPanel.textContent =
    humanScore >= winningScore
      ? "You reached 5 points. You win the game!"
      : "Computer reached 5 points. You lose the game.";

  disableButtons();
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  resultsPanel.textContent = defaultMessage;
  updateScorePanel();
  enableButtons();
}

function playRound(human, computer) {
  if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    humanScore++;
    resultsPanel.textContent = `You win computer picked ${computer}`;
  } else if (human === computer) {
    resultsPanel.textContent = `its tie both picked  ${computer}`;
  } else {
    resultsPanel.textContent = `you lose computer picked ${computer}`;
    computerScore++;
  }

  updateScorePanel();

  if (isGameOver()) {
    endGame();
  }
}

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (isGameOver()) return;

    const humanChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
});

restartButton.addEventListener("click", resetGame);

resultsPanel.textContent = defaultMessage;
updateScorePanel();
