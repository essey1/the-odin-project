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

// 
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'Computer wins! paper beats rock';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'Player wins! paper beats rock';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'Player wins! rock beats scissors';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'Computer wins! rock beats scissors';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'Computer wins! scissors beats paper';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'Player wins! scissors beats paper';
    }
}

const playerSelection = 'paper';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));