console.log(getHumanChoice());

function getComputerChoice(){
    //Gets a number between 0 and 2
    let choice = Math.floor(Math.random(3) * 3);
    
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice(){
    return prompt("Enter rock, paper, or scissor.");
}