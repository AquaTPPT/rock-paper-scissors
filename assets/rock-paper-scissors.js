// I shall explain the use of every single code snippet, because why not :D

function getComputerChoice() { 
    
    // So uh, for this one I just thought about using if-else statements, so I checked to see how they worked and it worked!
    let computerChoice = Math.floor (Math.random()* 3);

    if (computerChoice == 1)
        return 'rock';
    else if (computerChoice == 2)
        return 'paper';
    else
        return 'scissors';
}

function getHumanChoice() { 

    let choice = prompt('Rock, Paper, or Scissors?','');
    let choice2 = prompt('Rock, Paper, or Scissors?','');
    let choice3 = prompt('Rock, Paper, or Scissors?','');
    let choice4 = prompt('Rock, Paper, or Scissors?','');
    let choice5 = prompt('Rock, Paper, or Scissors?','');

    const normalizedChoice = choice.toLowerCase();
    const normalizedChoice2 = choice2.toLowerCase();
    const normalizedChoice3 = choice3.toLowerCase();
    const normalizedChoice4 = choice4.toLowerCase();
    const normalizedChoice5 = choice5.toLowerCase();

    return normalizedChoice, normalizedChoice2, normalizedChoice3, normalizedChoice4, normalizedChoice5;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    switch (humanChoice) {
        case "rock":

            if (computerChoice == 'rock') {
                     console.log("It's a tie");
                     console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                }
                else if (computerChoice == 'paper') {
                    console.log('You lose!');
                    computerScore++;
                    console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                }
                else if (computerChoice == 'scissors') {
                    console.log("You win!");
                    humanScore++;
                    console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                }
        break;
        case "paper":
                
            if (computerChoice == 'rock') {
                    console.log("You win!");
                    humanScore++;
                    console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    
                }
            else if (computerChoice == 'paper') {
                    console.log("It's a tie");
                    console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                }    
            else if (computerChoice == 'scissors') {
                    console.log('You lose!');
                    computerScore++;
                    console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                }
        break;
        case "scissors":
            
            if (computerChoice == 'rock') {
                    console.log("It's a tie");
                    console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                }
            else if (computerChoice == 'paper') {
                    console.log('You lose!');
                    computerScore++;
                    console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                }    
            else if (computerChoice == 'scissors') {
                    console.log("You win!");
                    humanScore++;
                    console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                }
        break;
    }

}


function playGame() {

    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playGame()
