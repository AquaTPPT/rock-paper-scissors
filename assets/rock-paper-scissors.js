function getComputerChoice () {

    let computerChoice = Math.floor(Math.random() * 3);

    let computerResult;

    if (computerChoice == 0) {
        computerResult = 'rock'
    }
    else if (computerChoice == 1) {
        computerResult = 'paper'
    }
    else {
        computerResult = 'scissors'
    }

    return computerResult
}

function getHumanChoice() {

    let choice = prompt('Rock, Paper or Scissors?');

    let normalizedChoice = choice.toLowerCase();

    return normalizedChoice
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    let result;

    if (humanChoice == 'rock') {
        if (computerChoice == 'rock') {
            result = 'Tie!'  
        }
        else if (computerChoice == 'paper') {
            result = 'You lose!';
        }
        else if (computerChoice == 'scissors') {
            result = 'You win!';
        }
    }

    else if (humanChoice == 'paper') {

        if (computerChoice == 'rock') {
            result = 'You win!';
        }
        else if (computerChoice == 'paper') {
            result = 'tie!';
        }
        else if (computerChoice == 'scissors') {
            result = 'You lose!';
        }
    }

    else if (humanChoice == 'scissors') {
        if (computerChoice == 'rock') {
            result = 'You lose!';
        }
        else if (computerChoice == 'paper') {
            result = 'You win!';
        }
        else if (computerChoice == 'scissors') {
            result = 'tie';
        }
    }
    else {}

    console.log(computerScore + '  ' + humanScore);

    return result;
}

function playGame() {

    for (i=1;i<6; ++i) {
        getHumanChoice();
        getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playGame();