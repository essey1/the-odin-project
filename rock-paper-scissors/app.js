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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        let currentComputerScore = Number(computerScore.textContent);
        currentComputerScore++;
        computerScore.textContent = currentComputerScore;
        return 'Computer wins! paper beats rock';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        let currentPlayerScore = Number(playerScore.textContent);
        currentPlayerScore++;
        playerScore.textContent = currentPlayerScore;
        return 'You win! paper beats rock';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        currentPlayerScore = Number(playerScore.textContent);
        currentPlayerScore++;
        playerScore.textContent = currentPlayerScore;
        return 'You win! rock beats scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        currentComputerScore = Number(computerScore.textContent);
        currentComputerScore++;
        computerScore.textContent = currentComputerScore;
        return 'Computer wins! rock beats scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        currentComputerScore = Number(computerScore.textContent);
        currentComputerScore++;
        computerScore.textContent = currentComputerScore;
        return 'Computer wins! scissors beats paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        currentPlayerScore = Number(playerScore.textContent);
        currentPlayerScore++;
        playerScore.textContent = currentPlayerScore;
        return 'You win! scissors beats paper';
    } else if (playerSelection === computerSelection)  {
        return "It's a tie, try again!";
    } else {
        currentComputerScore = Number(computerScore.textContent);
        currentComputerScore++;
        computerScore.textContent = currentComputerScore;
        return 'Computer wins! because "' + playerSelection + '" is invalid';
    }
}

// Executes the playRound function when the user clicks on one of the buttons
const playButtons = document.querySelectorAll("#button");

playButtons.forEach(button => {
  const buttonValue = button.getAttribute("value");
  button.addEventListener("click", () => {
    let score = document.getElementById("score");
    let result = document.getElementById("result");

    score.textContent = playRound(buttonValue, getComputerChoice());

    // Announces whether the user have won or lost the game based on who reached a score of 5 first
    result.textContent = ""
    if (computerScore.textContent == 5) {
        result.textContent = "You've Lost The Game " + playerScore.textContent + " - " + computerScore.textContent;
        computerScore.textContent = 0
        playerScore.textContent = 0
    } else if(playerScore.textContent == 5) {
        result.textContent = "You've Won The Game " + playerScore.textContent + " - " + computerScore.textContent;
        computerScore.textContent = 0
        playerScore.textContent = 0
    }
  });
});