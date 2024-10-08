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
let player1Name = "";
let player2Name = "";
let currentPlayer = 1;
let player1Choice = null;
let player2Choice = null;
const choiceButtons = document.querySelectorAll(".choice-btn");
const gameDiv = document.querySelector(".game");
const resultsDiv = document.querySelector(".results");
const resultDivs = document.querySelectorAll(".results__result");
const player1GameSection = document.querySelector("#player1-game");
const player2GameSection = document.querySelector("#player2-game");

const resultWinner = document.querySelector(".results__winner");
const resultText = document.querySelector(".results__text");

const playAgainBtn = document.querySelector(".play-again");

const scoreNumber = document.querySelector(".score__number");
let score = 0;

const playerTurnModal = document.querySelector(".player-turn-modal");
const playerTurnText = document.getElementById("player-turn-text");
const readyBtn = document.getElementById("ready-btn");
// game logic

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const choiceName = button.dataset.choice;
    const choice = CHOICES.find((choice) => choice.name === choiceName);
    choose(choice);
  });
});
function getPlayerNames() {
  player1Name = prompt("Enter Player 1's name:") || "Player 1";
  player2Name = prompt("Enter Player 2's name:") || "Player 2";
  updatePlayerNames();
}

function updatePlayerNames() {
  document.querySelector(
    ".score__title1"
  ).textContent = `${player1Name}'s Score`;
  document.querySelector(
    ".score__title2"
  ).textContent = `${player2Name}'s Score`;
  document.querySelector(".heading1").textContent = `${player1Name} Picked`;
  document.querySelector(".heading2").textContent = `${player2Name} Picked`;
}
function showPlayerTurnModal(playerNumber) {
  const playerName = playerNumber === 1 ? player1Name : player2Name;
  playerTurnText.textContent = `${playerName}'s Turn`;
  playerTurnModal.classList.toggle("hidden");
}

function switchPlayers() {
  player1GameSection.classList.toggle("hidden");
  player2GameSection.classList.toggle("hidden");
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  showPlayerTurnModal(currentPlayer);
}
function choose(choice) {
  if (currentPlayer === 1) {
    player1Choice = choice;
    switchPlayers();
  } else {
    player2Choice = choice;
    displayResults([player1Choice, player2Choice]);
    displayWinner([player1Choice, player2Choice]);
  }
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
    const player1Wins = isWinner(results);
    const player2Wins = isWinner(results.reverse());

    if (player1Wins) {
      resultText.innerHTML = `${player1Name} wins`;
      resultDivs[0].classList.toggle("winner");
      keepScore(1, 1);
    } else if (player2Wins) {
      resultText.innerHTML = `${player2Name} wins`;
      resultDivs[1].classList.toggle("winner");
      keepScore(1, 2);
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
function keepScore(point, player) {
  const scoreElement = document.getElementById(`player${player}-score`);
  let score = parseInt(scoreElement.innerText);
  score += point;
  scoreElement.innerText = score;
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
  switchPlayers();
});

// ready button
readyBtn.addEventListener("click", () => {
  playerTurnModal.classList.toggle("hidden");
  if (currentPlayer === 1) {
    player1GameSection.classList.toggle("hidden");
    player2GameSection.classList.toggle("hidden");
  } else {
    player2GameSection.classList.toggle("hidden");
    player1GameSection.classList.toggle("hidden");
  }
});

(function () {
  getPlayerNames();
})();
