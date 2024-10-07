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
}
