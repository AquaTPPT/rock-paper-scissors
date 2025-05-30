
function getComputerChoice() { 

    let computerChoice = Math.floor (Math.random()* 3);
    let computerChoice2 = Math.floor (Math.random()* 3);
    let computerChoice3 = Math.floor (Math.random()* 3);
    let computerChoice4 = Math.floor (Math.random()* 3);
    let computerChoice5 = Math.floor (Math.random()* 3);

    let result;
    let result2;
    let result3;
    let result4;
    let result5;

    if (computerChoice == 1) {
        result = 'rock'; 
    }
    else if (computerChoice == 2) {
        result = 'paper'; 
    }
    else {
        result = 'scissors'; 
    }

        if (computerChoice2 == 1) {
        result2 = 'rock'; 
    }
    else if (computerChoice2 == 2) {
        result2 = 'paper'; 
    }
    else {
        result2 = 'scissors'; 
    }
    
        if (computerChoice3 == 1) {
        result3 = 'rock'; 
    }
    else if (computerChoice3 == 2) {
        result3 = 'paper'; 
    }
    else {
        result3 = 'scissors'; 
    }
    
        if (computerChoice4 == 1) {
        result4 = 'rock'; 
    }
    else if (computerChoice4 == 2) {
        result4 = 'paper'; 
    }
    else {
        result4 = 'scissors'; 
    }
    
        if (computerChoice5 == 1) {
        result5 = 'rock'; 
    }
    else if (computerChoice5 == 2) {
        result5 = 'paper'; 
    }
    else {
        result5 = 'scissors'; 
    }
    
    const computerResult = [result, result2, result3, result4, result5];

    return computerResult;
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

    let humanResult = [normalizedChoice, normalizedChoice2, normalizedChoice3, normalizedChoice4, normalizedChoice5];

    return humanResult;
}

 function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerResult) {

        switch (humanChoice[0,1,2,3,4]) {
            case humanChoice[normalizedChoice] === "rock":

                if (computerResult[0] == 'rock') {
                    }
                    else if (computerResult[0] == 'paper') {
                        computerScore++;
                    }
                    else if (computerResult[0] == 'scissors') {
                        humanScore++;
                    }
            break;
            case humanChoice[0] === "paper":
                    
                if (computerResult[0] == 'rock') {
                        humanScore++;  
                    }
                else if (computerResult[0] == 'paper') {
                    }    
                else if (computerResult[0] == 'scissors') {
                        console.log('You lose!');
                        computerScore++;
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }
            break;
            case humanChoice[0] === "scissors":
                
                if (computerResult[0] == 'rock') {
                        console.log("It's a tie");
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }
                else if (computerResult[0] == 'paper') {
                        console.log('You lose!');
                        computerScore++;
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }    
                else if (computerResult[0] == 'scissors') {
                        console.log("You win!");
                        humanScore++;
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }
            break;
        }
       switch (humanChoice) {
            case "rock":

                if (computerResult[1] == 'rock') {
                        console.log("It's a tie");
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }
                    else if (computerResult[1] == 'paper') {
                        computerScore++; 
                        console.log('You lose!');
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }
                    else if (computerResult[1] == 'scissors') {
                        console.log("You win!");
                        humanScore++;
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }
            break;
            case "paper":
                    
                if (computerResult[1] == 'rock') {
                        console.log("You win!");
                        humanScore++;
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                        
                    }
                else if (computerResult[1] == 'paper') {
                        console.log("It's a tie");
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }    
                else if (computerResult[1] == 'scissors') {
                        console.log('You lose!');
                        computerScore++;
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }
            break;
            case "scissors":
                
                if (computerResult[1] == 'rock') {
                        console.log("It's a tie");
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }
                else if (computerResult[1] == 'paper') {
                        console.log('You lose!');
                        computerScore++;
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }    
                else if (computerResult[1] == 'scissors') {
                        console.log("You win!");
                        humanScore++;
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }
            break;
        }
        switch (humanChoice) {
            case "rock":

                if (computerResult[2] == 'rock') {
                        console.log("It's a tie");
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }
                    else if (computerResult[2] == 'paper') {
                        console.log('You lose!');
                        computerScore++;
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }
                    else if (computerResult[2] == 'scissors') {
                        console.log("You win!");
                        humanScore++;
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }
            break;
            case "paper":
                    
                if (computerResult[2] == 'rock') {
                        console.log("You win!");
                        humanScore++;
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                        
                    }
                else if (computerResult[2] == 'paper') {
                        console.log("It's a tie");
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }    
                else if (computerResult[2] == 'scissors') {
                        console.log('You lose!');
                        computerScore++;
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }
            break;
            case "scissors":
                
                if (computerResult[2] == 'rock') {
                        console.log("It's a tie");
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }
                else if (computerResult[2] == 'paper') {
                        console.log('You lose!');
                        computerScore++;
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }    
                else if (computerResult[2] == 'scissors') {
                        console.log("You win!");
                        humanScore++;
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }
            break;
        }
        switch (humanChoice) {
            case "rock":

                if (computerResult[3] == 'rock') {
                        console.log("It's a tie");
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }
                    else if (computerResult[3] == 'paper') {
                        console.log('You lose!');
                        computerScore++;
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }
                    else if (computerResult[3] == 'scissors') {
                        console.log("You win!");
                        humanScore++;
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }
            break;
            case "paper":
                    
                if (computerResult[3] == 'rock') {
                        console.log("You win!");
                        humanScore++;
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                        
                    }
                else if (computerResult[3] == 'paper') {
                        console.log("It's a tie");
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }    
                else if (computerResult[3] == 'scissors') {
                        console.log('You lose!');
                        computerScore++;
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }
            break;
            case "scissors":
                
                if (computerResult[3] == 'rock') {
                        console.log("It's a tie");
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }
                else if (computerResult[3] == 'paper') {
                        console.log('You lose!');
                        computerScore++;
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }    
                else if (computerResult[3] == 'scissors') {
                        console.log("You win!");
                        humanScore++;
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }
            break;
        }
        switch (humanChoice) {
            case "rock":

                if (computerResult[4] == 'rock') {
                        console.log("It's a tie");
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }
                    else if (computerResult[4] == 'paper') {
                        console.log('You lose!');
                        computerScore++;
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }
                    else if (computerResult[4] == 'scissors') {
                        console.log("You win!");
                        humanScore++;
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }
            break;
            case "paper":
                    
                if (computerResult[4] == 'rock') {
                        console.log("You win!");
                        humanScore++;
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                        
                    }
                else if (computerResult[4] == 'paper') {
                        console.log("It's a tie");
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }    
                else if (computerResult[4] == 'scissors') {
                        console.log('You lose!');
                        computerScore++;
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }
            break;
            case "scissors":
                
                if (computerResult[4] == 'rock') {
                        console.log("It's a tie");
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }
                else if (computerResult[4] == 'paper') {
                        console.log('You lose!');
                        computerScore++;
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }    
                else if (computerResult[4] == 'scissors') {
                        console.log("You win!");
                        humanScore++;
                        console.log('YOU: ' + humanScore + ' ; CPU: ' + computerScore);
                    }
            break;
        }

    } 

    
   
    return playRound(humanSelection, computerSelection);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanSelection);

console.log(playGame())
