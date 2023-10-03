// Returns rock, papers or scissors randomly
function getComputerChoice() {
    const randomNumber = (Math.floor(Math.random() * 3));
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else if (randomNumber === 2) {
        return 'scissors';
    }
}

// Compares the values and increments the value of the winner by one
let playerScore = 0;
let computerScore = 0;

let playerSelection;

function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        ++computerScore;
        return 'Computer wins! paper beats rock';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        ++playerScore;
        return 'Player wins! paper beats rock';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        ++playerScore;
        return 'Player wins! rock beats scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        ++computerScore;
        return 'Computer wins! rock beats scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        ++computerScore;
        return 'Computer wins! scissors beats paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        ++playerScore;
        return 'Player wins! scissors beats paper';
    } else if (playerSelection === computerSelection)  {
        return "It's a tie";
    } else {
        ++computerScore;
        return 'Computer wins! because "' + playerSelection + '" is invalid';
    }
}

const playButtons = document.querySelectorAll("#button");

playButtons.forEach(button => {
  const buttonValue = button.getAttribute("value");
  button.addEventListener("click", () => {
    console.log(playRound(buttonValue, getComputerChoice()));
  });
});

// // Executes the game for five rounds and return the winner
// function game() {
//     for (i=0; i<5; ++i) {
//         console.log(
//             playRound(prompt("choose from rock, paper and scissors 5 times, and open the console by right clicking and clicking inspect to see your results"), 
//                 getComputerChoice()));
//     }

//     if (playerScore > computerScore) {
//         return "You Won The Game " + playerScore + " - " + computerScore;
//     } else if (playerScore < computerScore) {
//         return "You Lost The Game " + computerScore + " - " + playerScore;
//     } else {
//         return "It's a " + playerScore + " - " + computerScore + " Draw";
//     }
// }

// console.log(game());


