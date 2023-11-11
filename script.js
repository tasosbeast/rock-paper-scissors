//create a variable computerchoice
//create a variable for the players selection 

let playerChoice ;
let computerChoice ;
let myScore = 0;
let computerScore = 0;
// make a function that will generate a random choice between rock paper and scissors
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'Rock'
    } else if(randomNumber === 1){
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

// create a function for the players choice to eliminate bugs and wrong words
function getPlayerChoice(){
    let playersInput =  prompt('Rock, Paper, Scissors');
    playersInput = playersInput.toLowerCase();
    playersInputCapitalize = playersInput.replace(playersInput[0], playersInput[0].toUpperCase())
    if(playersInputCapitalize === 'Rock'){
        return 'Rock';
    } else if (playersInputCapitalize === 'Paper'){
        return 'Paper';
    } else if (playersInputCapitalize === 'Scissors'){
        return 'Scissors';
    } else {
        alert('Wrong Answer You have to choose either Rock , Paper or Scissors Refresh to try again');
    }
}


//create a function that plays a round and return the outcome

function playRound(playerChoice, computerChoice){
    if (playerChoice === computerChoice) {
        return "It's a tie!"
    } else if (playerChoice === 'Rock' &&  computerChoice === 'Paper') {
        computerScore++
        return "You lost! paper beats rock"
    } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
        myScore++
        return "You win !!! rock wins scissors"
    } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
        myScore++
        return "You win !!! paper wins rock"
    } else if (playerChoice === 'Paper' && computerChoice === 'Scissors') {
        computerScore++
        return "You lost! scissors beats paper"
    } else if (playerChoice === 'Scissors' && computerChoice === 'Rock') {
        computerScore++
        return "You lost! rock beats scissors"
    } else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
        myScore++
        return "You win !!! scissors beats paper"
    }
}

function game(){
    for (let i = 1; i <= 5; i++){
        playerChoice = getPlayerChoice()
        computerChoice = getComputerChoice()
        console.log(playRound(playerChoice, computerChoice));
    }

    if (myScore > computerScore) {
        console.log('You win the game!!!')
    } else if (computerScore > myScore) {
        console.log('You lost the game!!')
    } else{
        console.log("the game is a TIE!!!")
    }

    
}


game()




