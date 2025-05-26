// I shall explain the use of every single code snippet, because why not :D

function getComputerChoice() { 
    
    // So uh, for this one I just thought about using if-else statements, so I checked to see how they worked and it worked!
    let computerChoice = Math.floor (Math.random()* 3);

    if (computerChoice == 1)
        return 'Rock!';
    else if (computerChoice == 2)
        return 'Paper!';
    else
        return 'Scissors!';
}

function getHumanChoice(choice) { 
    
    /* This one was a little trickier.
    I ended up using switch statements after looking it up because I had screwed up the if-else statement I was using.
    on the humanChoice variable, I was checking the 'choice' bit, which made the code not work,
    and after some research, I found that a lot of people on stackOverflow were mentioning the switch statement. 
    So yeah, I dunno if I was supposed to use it or not, but it is written there :'D */

    prompt('Rock, Paper, or Scissors?', choice)

}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    
    
    switch (humanChoice) {
        case getHumanChoice() == 'rock':
            if (getComputerChoice() == 1)
                console.log("It's a tie!");
            else if (getComputerChoice()== 2)
                return "You lose!";
            else if (getComputerChoice() == 3)
                return "you win!";
            else;
        break;
        
        case humanChoice == 'paper':
            if (getComputerChoice() == 1)
                return "you win!";
            else if (getComputerChoice() == 2)
                return "It's a tie!";
            else if (getComputerChoice() == 3)
                return "You lose!";
            else;
        break;

        case humanChoice == 'scissors':
            if (getComputerChoice() == 1)
                return "You lose!";
            else if (getComputerChoice() == 2)
                return "you win!";
            else if (getComputerChoice() == 3)
                return "It's a tie!";
            else;

    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);