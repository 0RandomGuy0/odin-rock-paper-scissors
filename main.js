let humanScore = 0;
let computerScore = 0;
const resultMsg = document.querySelector(".result");

function getComputerChoice(){
    let choice = Math.floor(Math.random(3) * 3);
    
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    }
    return "scissor";
}

//Function assumes valid input
function getHumanChoice(){
    return prompt("Enter rock, paper, or scissor.");
}

function playRound(humanChoice, computerChoice){
    const hChoice = humanChoice.toLowerCase();
    let outcome = "";

    switch(hChoice){
        case "rock":
            if (computerChoice === "rock"){
                outcome = "draw";
            }
            else if (computerChoice === "paper"){
                outcome = "lose";
            }
            else{
                outcome = "win";
            }
            break;
        case "paper":
            if (computerChoice === "rock"){
                outcome = "win";
            }
            else if (computerChoice === "paper"){
                outcome = "draw";
            }
            else{
                outcome = "lose";
            }
            break;
        case "scissor":
            if (computerChoice === "rock"){
                outcome = "lose";
            }
            else if (computerChoice === "paper"){
                outcome = "win";
            }
            else{
                outcome = "draw";
            }
            break;
        default:
            break;
    }
    
    if (outcome === "win"){
        humanScore++;
    }
    else if(outcome === "lose"){
        computerScore++;
    }

    resultMsg.innerHTML = `
        <strong>Your choice:</strong> ${hChoice}<br>
        <strong>Computer's choice:</strong> ${computerChoice}<br>
        <strong>Result:</strong> You ${outcome} this round!
    `;
}

function playGame(){
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection,computerSelection);
    }

    if (humanScore < computerScore){
        console.log("You lost the game! You had a score of " + humanScore 
        + " and the Computer had a score of " + computerScore + ".")
    }
    else if (humanScore > computerScore){
        console.log("You win the game! You had a score of " + humanScore 
        + " and the Computer had a score of " + computerScore + ".")
    }
    else{
        console.log("It's a draw! You had a score of " + humanScore 
        + " and the Computer had a score of " + computerScore + ".")
    }
}

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissor");

rockBtn.addEventListener("click",() => {
    playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click",() => {
    playRound("paper", getComputerChoice());
});

scissorBtn.addEventListener("click",() => {
    playRound("scissor", getComputerChoice());
});