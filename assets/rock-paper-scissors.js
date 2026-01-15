let humanScore = 0;
let computerScore = 0;

const container = document.querySelector('#container');
const results = document.querySelector('#results');

const text = document.createElement('p');
results.appendChild(text)

const counter = document.createElement('p');
results.appendChild(counter);

const startGame = document.createElement('button');
startGame.textContent = 'Start Game';
container.appendChild(startGame);
startGame.addEventListener('click', () => {getHumanChoice()});

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

    const rockButton = document.createElement('button');
    rockButton.textContent = 'Rock';
    container.appendChild(rockButton);

    const paperButton = document.createElement('button');
    paperButton.textContent = 'Paper';
    container.appendChild(paperButton);

    const scissorsButton = document.createElement('button');
    scissorsButton.textContent = 'Scissors';
    container.appendChild(scissorsButton);

    rockButton.addEventListener('click', function() {
        choice = 'rock';
        playRound(choice, getComputerChoice())
        container.removeChild(rockButton);
        container.removeChild(paperButton);
        container.removeChild(scissorsButton);
    });
    paperButton.addEventListener('click', function() {
        choice = 'paper';
        playRound(choice, getComputerChoice())
        container.removeChild(rockButton);
        container.removeChild(paperButton);
        container.removeChild(scissorsButton);
    });
    scissorsButton.addEventListener('click', function() {
        choice = 'scissors';
        playRound(choice, getComputerChoice())
        container.removeChild(rockButton);
        container.removeChild(paperButton);
        container.removeChild(scissorsButton);
    });

}

function playRound(humanChoice, computerChoice) {
    
    if (humanScore == 5 || computerScore == 5) {
        humanScore = 0;
        computerScore = 0;
    }

    let result;
    if (humanChoice == 'rock' && computerChoice == 'rock' || 
        humanChoice == 'paper' && computerChoice == 'paper' ||
        humanChoice == 'scissors' && computerChoice == 'scissors') {
            result = 'Tie!';
            endResult();
        }
        else if (humanChoice == 'rock' && computerChoice == 'paper' || 
        humanChoice == 'paper' && computerChoice == 'scissors' ||
        humanChoice == 'scissors' && computerChoice == 'rock') {
            ++computerScore;
            result = 'You lose!';
            endResult();
        }
        else {
            ++humanScore;
            result = 'You win!';
           
        }

    text.textContent = `${result}`;
    counter.textContent = `${humanScore} - ${computerScore}`; 
    endResult();
}

function endResult() {
    if (humanScore == 5) {
        text.textContent = '\n You won the game! Congratulations!'
    }
    else if (computerScore == 5){
        text.textContent = '\n The computer won! Maybe next time.'
    }
    
}