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
let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");

let playerSelection;

function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        let currentScore = Number(computerScore.textContent);
        currentScore++;
        computerScore.textContent = currentScore;
        return 'Computer wins! paper beats rock';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        let currentScore = Number(playerScore.textContent);
        currentScore++;
        playerScore.textContent = currentScore;
        return 'Player wins! paper beats rock';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        let currentScore = Number(playerScore.textContent);
        currentScore++;
        playerScore.textContent = currentScore;
        return 'Player wins! rock beats scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        let currentScore = Number(computerScore.textContent);
        currentScore++;
        computerScore.textContent = currentScore;
        return 'Computer wins! rock beats scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        let currentScore = Number(computerScore.textContent);
        currentScore++;
        computerScore.textContent = currentScore;
        return 'Computer wins! scissors beats paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        let currentScore = Number(playerScore.textContent);
        currentScore++;
        playerScore.textContent = currentScore;
        return 'Player wins! scissors beats paper';
    } else if (playerSelection === computerSelection)  {
        return "It's a tie";
    } else {
        let currentScore = Number(computerScore.textContent);
        currentScore++;
        computerScore.textContent = currentScore;
        return 'Computer wins! because "' + playerSelection + '" is invalid';
    }
}

const playButtons = document.querySelectorAll("#button");

playButtons.forEach(button => {
  const buttonValue = button.getAttribute("value");
  button.addEventListener("click", () => {
    playRound(buttonValue, getComputerChoice());
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


