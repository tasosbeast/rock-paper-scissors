// DOM elements
const btnRules = document.querySelector(".rules-btn");
const btnClose = document.querySelector(".close-btn");
const modalRules = document.querySelector(".modal");

// Show/hide modal
btnRules.addEventListener("click", () =>
  modalRules.classList.toggle("show-modal")
);

btnClose.addEventListener("click", () =>
  modalRules.classList.toggle("show-modal")
);
/**
 *
 * Implements a simple Rock-Paper-Scissors game where the user plays against the computer.
 * The game is played over 5 rounds, with the winner determined by the total score.
 */
const CHOICES = [
  {
    name: "rock",
    beats: "scissors",
  },
  {
    name: "paper",
    beats: "rock",
  },
  {
    name: "scissors",
    beats: "paper",
  },
];
const choiceButtons = document.querySelectorAll(".choice-btn");
const gameDiv = document.querySelector(".game");
const resultsDiv = document.querySelector(".results");
const resultDivs = document.querySelectorAll(".results__result");

const resultWinner = document.querySelector(".results__winner");
const resultText = document.querySelector(".results__text");

const playAgainBtn = document.querySelector(".play-again");

const scoreNumber = document.querySelector(".score__number");
let score = 0;
// game logic

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const choiceName = button.dataset.choice;
    const choice = CHOICES.find((choice) => choice.name === choiceName);
    choose(choice);
  });
});

function choose(choice) {
  const aichoice = aiChoose();
  displayResults([choice, aichoice]);
  displayWinner([choice, aichoice]);
}

function aiChoose() {
  const rand = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[rand];
}

function displayResults(results) {
  resultDivs.forEach((resultDiv, index) => {
    setTimeout(() => {
      resultDiv.innerHTML = `
      <div class="choice ${results[index].name}">
        <img src="images/icon-${results[index].name}.svg" alt="${results[index].name}" />
      </div>
      `;
    }, index * 1000);
  });

  gameDiv.classList.toggle("hidden");
  resultsDiv.classList.toggle("hidden");
}

function displayWinner(results) {
  setTimeout(() => {
    const userWins = isWinner(results);
    const aiWins = isWinner(results.reverse());

    if (userWins) {
      resultText.innerHTML = `You win`;
      resultDivs[0].classList.toggle("winner");
      keepScore(1);
    } else if (aiWins) {
      resultText.innerHTML = `You lose`;
      resultDivs[1].classList.toggle("winner");
      keepScore(-1);
    } else {
      resultText.innerHTML = `It's a tie`;
    }
    resultWinner.classList.toggle("hidden");
    resultsDiv.classList.toggle("show-winner");
  }, 1000);
}

function isWinner(results) {
  return results[0].beats === results[1].name;
}

// score
function keepScore(point) {
  score += point;
  scoreNumber.innerText = score;
}

// play again
playAgainBtn.addEventListener("click", () => {
  gameDiv.classList.toggle("hidden");
  resultsDiv.classList.toggle("hidden");
  resultDivs.forEach((resultDiv) => {
    resultDiv.innerHTML = "";
    resultDiv.classList.remove("winner");
  });

  resultText.innerText = "";
  resultWinner.classList.toggle("hidden");
  resultsDiv.classList.toggle("show-winner");
});
