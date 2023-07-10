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

console.log(getComputerChoice());