// This code stores the player and computer's choice, as well as the scores of each player.
let myScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;
let roundCount = 0;

const rockBtnEl = document.querySelector("#rock");
const paperBtnEl = document.querySelector("#paper");
const scissorsBtnEl = document.querySelector("#scissors");

const statusDivEl = document.querySelector("#status");
const parWelcome = document.createElement("p");
const parWelcome2 = document.createElement("p");
const parWelcome3 = document.createElement("p");

const scoreboardEl = document.querySelector("#score");
const parScore1 = document.createElement("p");
const parScore = document.createElement("p");
const parScore2 = document.createElement("p");
const parScore3 = document.createElement("p");

const h1El = document.querySelector("h1");
const bodyEl = document.querySelector("body");
game();

rockBtnEl.addEventListener("click", () => {
  console.log("clicked on Rock");
  playerChoice = "Rock";
  playRound();
});
paperBtnEl.addEventListener("click", () => {
  console.log("clicked on Paper");
  playerChoice = "Paper";
  playRound();
});
scissorsBtnEl.addEventListener("click", () => {
  console.log("clicked on Scissors");
  playerChoice = "Scissors";
  playRound();
});

// Function to generate computer's choice

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

//create a function that plays a round and return the outcome
function playRound() {
  computerChoice = getComputerChoice();
  console.log("Computer choice: " + computerChoice);

  let roundResult = "";

  if (playerChoice === computerChoice) {
    roundResult = `It's a tie! Both chose ${playerChoice}.`;
  } else if (playerChoice === "Rock" && computerChoice === "Paper") {
    computerScore++;
    roundResult = "You lost! Paper beats rock.";
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    myScore++;
    roundResult = "You win! Rock beats scissors.";
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    myScore++;
    roundResult = "You win! Paper beats rock.";
  } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
    computerScore++;
    roundResult = "You lost! Scissors beats paper.";
  } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
    computerScore++;
    roundResult = "You lost! Rock beats scissors.";
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    myScore++;
    roundResult = "You win! Scissors beats paper.";
  }

  // Update the scoreboard
  parScore.textContent = `You: ${myScore} - Computer: ${computerScore}`;
  parScore1.textContent = `Computer choice: ${computerChoice} - Your choice: ${playerChoice}`;
  parScore1.style.fontSize = "1.3rem";
  parScore2.textContent = `Round ${roundCount + 1} of 5`;
  parScore3.textContent = `Result: ${roundResult}`;

  scoreboardEl.appendChild(parScore);
  scoreboardEl.appendChild(parScore1);
  scoreboardEl.appendChild(parScore2);
  scoreboardEl.appendChild(parScore3);

  // Update the round count
  roundCount++;

  if (roundCount === 5) {
    if (myScore > computerScore) {
      parScore.textContent = `You won the game with ${myScore} - ${computerScore} points!`;
      h1El.textContent = "Congratulations! You won the game!";
      bodyEl.style.backgroundImage =
        "url(https://media.giphy.com/media/BPJmthQ3YRwD6QqcVD/giphy.gif)";
      bodyEl.style.backgroundSize = "100% 100%";
    } else if (computerScore > myScore) {
      parScore.textContent = `You lost the game with ${computerScore} - ${myScore} points!`;
      h1El.textContent = "You lost the game!";
      bodyEl.style.backgroundImage =
        "url(https://media.giphy.com/media/3o7TKr3nzbh5WgCFxe/giphy.gif)";
      bodyEl.style.backgroundSize = "100% 100%";
    } else {
      parScore.textContent = `The game ended in a tie with ${myScore} - ${computerScore} points!`;
    }

    // Create overlay
    const overlayEl = document.getElementById("overlay");
    overlayEl.style.display = "block"; // Show the overlay

    // Disable buttons
    rockBtnEl.disabled = true;
    paperBtnEl.disabled = true;
    scissorsBtnEl.disabled = true;

    // Create a button to restart the game
    const btnRestart = document.createElement("button");
    btnRestart.textContent = "Restart";
    btnRestart.style.marginTop = "10px";
    btnRestart.style.marginBottom = "10px";
    btnRestart.style.padding = "0.5rem";
    btnRestart.style.fontSize = "1.3rem";
    btnRestart.style.borderRadius = "5000px";
    btnRestart.style.backgroundColor = "green";
    btnRestart.style.color = "white";
    btnRestart.style.border = "none";
    btnRestart.style.cursor = "pointer";
    btnRestart.style.position = "absolute";
    btnRestart.style.bottom = "50%";
    btnRestart.style.left = "50%";
    btnRestart.style.transform = "translate(-50%, -50%)";
    btnRestart.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    btnRestart.style.fontFamily = "Arial, Helvetica, sans-serif";
    btnRestart.style.width = "700px";
    btnRestart.style.height = "100px";
    btnRestart.style.zIndex = "1000";

    btnRestart.addEventListener("click", () => {
      location.reload();
    });
    bodyEl.appendChild(btnRestart);
  }
}

// play for 5 rounds and show the winner based on higher score
function game() {
  // Welcome messages
  parWelcome.textContent = "Welcome to the game!";
  parWelcome2.textContent =
    "You are going to play 5 rounds of Rock, Paper, Scissors";
  parWelcome3.textContent =
    "The winner is the one that has more points at the end of the 5 rounds";
  statusDivEl.appendChild(parWelcome);
  statusDivEl.appendChild(parWelcome2);
  statusDivEl.appendChild(parWelcome3);
  scoreboardEl.appendChild(parScore);
}
