// I shall explain the use of every single code snippet, because why not :D

function getComputerChoice() { 
    
    // So uh, for this one I just thought about using if-else statements, so I checked to see how they worked and it worked!
    let computerChoice = Math.floor (Math.random()* 3);

  /*  if (computerChoice == 1)
        return 'rock';
    else if (computerChoice == 2)
        return 'paper';
    else
        return 'scissors'; */
}

function getHumanChoice(choice) { 

    choice = prompt('Rock, Paper, or Scissors?','')

    normalizedChoice = choice.toLowerCase()
    
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {

    humanChoice = getHumanChoice;
    computerChoice = getComputerChoice;

    switch (normalizedChoice) {
        case "rock":

            if (getComputerChoice === 1) {
                    alert("It's a tie")
                }
                else if (getComputerChoice === 2) {
                    alert("You lose!")
                }    
                else if (getComputerChoice === 3) {
                    alert('You win!')

                
        break;
        }
        

    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);