function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice == 0) {
        return 'rock'
    }
    else if (computerChoice == 1) {
        return 'paper'
    }
    else {
        return 'scissors'
    }
}

function getHumanChoice() {

    let choice = prompt('Rock, Paper or Scissors?');

    let normalizedChoice = choice.toLowerCase();
    
    return normalizedChoice
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice == 'rock') {
        if (computerChoice == 'rock') {
            console.log ('tie!');
            
        }
        else if (computerChoice == 'paper') {
            console.log('You lose!')
            ++computerScore;
            
        }
        else if (computerChoice == 'scissors') {
            console.log ('You win!');
            ++humanScore;
            
        }
    }

    else if (humanChoice == 'paper') {

        if (computerChoice == 'rock') {
            console.log ('You win!')
            ++humanScore;
            
        }
        else if (computerChoice == 'paper') {
            console.log ('tie!');
            
        }
        else if (computerChoice == 'scissors') {
            console.log('You lose!');
            ++computerScore;
            
        }
    }

    else if (humanChoice == 'scissors') {
        if (computerChoice == 'rock') {
            console.log ('You lose!');
            ++computerScore;
             
        }
        else if (computerChoice == 'paper') {
            console.log('You win!')
            ++humanScore;
            
        }
        else if (computerChoice == 'scissors') {
            console.log('tie!'); 
            
        }
    }

    console.log(computerScore + '  ' + humanScore);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(computerSelection);

playRound(humanSelection, computerSelection);