let humanScore = 0;
let computerScore = 0;

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

    console.log("You chose " + hChoice + ".");
    console.log("Computer chose " + computerChoice + ".");
    console.log("You " + outcome + "!");
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);