for(let i = 1; i < 10; i++){
    console.log(getComputerChoice());
}

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