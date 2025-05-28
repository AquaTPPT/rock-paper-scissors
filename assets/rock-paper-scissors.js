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

    const normalizedChoice = choice.toLowerCase();

    return normalizedChoice;
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

function playAgain() {

let playAgain = confirm('play again?');
alert(playAgain);
if (playAgain == true)
playRound();
else
return

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);