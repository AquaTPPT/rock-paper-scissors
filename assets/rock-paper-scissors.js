
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    let computerResult;
    switch (computerChoice) {
        case 0: {
            return computerResult = 'rock';
        }
        case 1: {
            return computerResult = 'paper';
        }
        case 2: {
            return computerResult = 'scissors';
        }
    }
}

function getHumanChoice() {
    let choice = prompt('Rock, Paper or Scissors?');
    let normalizedChoice = choice.toLowerCase();
    return normalizedChoice;
}

function playRound(humanChoice, computerChoice) {
    let result;
    if (humanChoice == 'rock' && computerChoice == 'rock' || 
        humanChoice == 'paper' && computerChoice == 'paper' ||
        humanChoice == 'scissors' && computerChoice == 'scissors') {
            result = 'Tie!'  
        }
        else if (humanChoice == 'rock' && computerChoice == 'paper' || 
        humanChoice == 'paper' && computerChoice == 'scissors' ||
        humanChoice == 'scissors' && computerChoice == 'rock') {
            ++computerScore;
            result = 'You lose!';
        }
        else {
            ++humanScore;
            result = 'You win!';
        }

    console.log(result)
    console.log(computerScore + '  ' + humanScore);
    return result;
}

function playGame() {

    for (i=1;i<=5; ++i) {
        
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
    }

    let endResult;

    if (computerScore < humanScore) {
        endResult = 'You won the game! Congratulations!'; }
    else if (computerScore = humanScore) {
        endResult = "It's a draw! Good Game!"; }
    else {
        endResult ="The computer wins! Good Game!" }
    
    return console.log(endResult)
}
playGame();