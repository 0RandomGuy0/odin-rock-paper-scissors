let humanScore = 0;
let computerScore = 0;
const resultMsg = document.querySelector(".result");
const scoreDisplay = document.querySelector(".score");
displayScore();

function getComputerChoice(){
    let choice = Math.floor(Math.random(3) * 3);
    
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    }
    return "scissor";
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
    displayScore();
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

function displayScore() {
    if (humanScore === 5){
        resultMsg.innerHTML = `<strong>Congratulations!</strong><br> 
        You won the game with a score of ${humanScore} 
        against the computer's ${computerScore}.`;
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        resultMsg.innerHTML = '<strong>Game Over!</strong>';
        humanScore = 0;
        computerScore = 0;
    }
    scoreDisplay.textContent = humanScore + "   -   " + computerScore;
}