let humanScore = 0;
let computerScore = 0;
const winningScore = 5;
const defaultMessage = "Make your move to start.";

const choiceButtons = document.querySelectorAll(".choice-button");
const restartButton = document.querySelector("#restart-button");
const resultsPanel = document.querySelector("#results");
const humanScorePanel = document.querySelector("#human-score");
const computerScorePanel = document.querySelector("#computer-score");
const computerStage = document.querySelector(".computer-stage");
const computerStatusText = document.querySelector(".status-text");
const computerChoices = document.querySelectorAll("[data-computer-choice]");

let isAnimatingChoice = false;

function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

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
    button.classList.remove("is-loading");
  });
}

function enableButtons() {
  choiceButtons.forEach((button) => {
    button.disabled = false;
    button.classList.remove("is-loading");
  });
}

function setButtonsLoadingState(isLoading) {
  choiceButtons.forEach((button) => {
    button.classList.toggle("is-loading", isLoading);
  });
}

function clearComputerPreview() {
  computerChoices.forEach((choice) => {
    choice.classList.remove("is-active", "is-final");
  });
}

function setComputerPreview(choiceName, state) {
  clearComputerPreview();

  const activeChoice = Array.from(computerChoices).find((choice) => {
    return choice.dataset.computerChoice === choiceName;
  });

  if (!activeChoice) {
    return;
  }

  activeChoice.classList.add(state === "final" ? "is-final" : "is-active");
}

async function animateComputerChoice(finalChoice) {
  const previewChoices = [
    "rock",
    "paper",
    "scissors",
    "paper",
    "rock",
    "scissors",
  ];

  isAnimatingChoice = true;
  disableButtons();
  setButtonsLoadingState(true);
  computerStage.classList.add("is-choosing");
  computerStatusText.textContent = "Computer is choosing...";
  resultsPanel.textContent = "Computer is locking in a move...";

  for (const previewChoice of previewChoices) {
    setComputerPreview(previewChoice, "active");
    await delay(140);
  }

  setComputerPreview(finalChoice, "final");
  computerStage.classList.remove("is-choosing");
  computerStatusText.textContent = `Computer picked ${finalChoice}`;

  await delay(220);
  setButtonsLoadingState(false);
  isAnimatingChoice = false;
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
  computerStatusText.textContent = "Waiting for your move";
  computerStage.classList.remove("is-choosing");
  clearComputerPreview();
  updateScorePanel();
  enableButtons();
  isAnimatingChoice = false;
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
  button.addEventListener("click", async () => {
    if (isGameOver() || isAnimatingChoice) return;

    const humanChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();

    await animateComputerChoice(computerChoice);
    playRound(humanChoice, computerChoice);

    if (!isGameOver()) {
      enableButtons();
      computerStatusText.textContent = "Waiting for your move";
    }
  });
});

restartButton.addEventListener("click", resetGame);

resultsPanel.textContent = defaultMessage;
updateScorePanel();
