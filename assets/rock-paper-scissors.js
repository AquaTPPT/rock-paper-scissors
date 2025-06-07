function getComputerChoice() {

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

    let finalChoice = normalizedChoice

    return finalChoice
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
            ++computerScore;
        }
        else if (computerChoice == 'scissors') {
            result = 'You win!';
            ++humanScore;
        }
    }

    else if (humanChoice == 'paper') {
        if (computerChoice == 'rock') {
            result = 'You win!';
            ++humanScore;
        }
        else if (computerChoice == 'paper') {
            result = 'tie!';
        }
        else if (computerChoice == 'scissors') {
            result = 'You lose!';
            ++computerScore;
        }
    }

    else if (humanChoice == 'scissors') {
        if (computerChoice == 'rock') {
            result = 'You lose!';
            ++computerScore;
        }
        else if (computerChoice == 'paper') {
            result = 'You win!';
            ++humanScore;
        }
        else if (computerChoice == 'scissors') {
            result = 'tie';
        }
    }
    else {}

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
