function getComputerChoice(){
    const choices = ["R","P","S"];
    return choices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice(){
    const choice = prompt("Rock, Paper or Scissors!!");
    if(choice.toLowerCase() == "rock" ) return "R";
    if(choice.toLowerCase() == "paper" ) return "P";
    if(choice.toLowerCase() == "scissors" ) return "S";
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        return "It's a Tie!";
    }
    else if(
    (playerSelection === "R" && computerSelection === "S") ||
    (playerSelection === "S" && computerSelection === "P")
    (playerSelection === "P" && computerSelection === "R")
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }   
    else {
        return `You Loose! ${computerSelection} beats ${playerSelection}`;
    }
  }
   

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
 