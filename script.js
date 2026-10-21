function getComputerChoice() {
    let random = Math.floor(Math.random() * 100) + 1;

    if(random <= 33) return "rock";
    else if(random <= 66) return "paper";
    return "scissor";
}

// console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Enter your choice: ");
    return choice;
}

// console.log(getHumanChoice());


function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    
    const playRound = (humanChoice, computerChoice) => {
        let hChoice = humanChoice.toLowerCase();
        let cChoice = computerChoice.toLowerCase();
        if(hChoice === cChoice) {
            console.log("It is a Tie! You and the computer selected: " + humanChoice);
            humanScore += 1;
            computerScore += 1;
        } else if((hChoice == "rock" && cChoice == "scissor") || (hChoice == "scissor" && cChoice == "paper") || (hChoice == "paper" && cChoice == "rock")) {
            console.log("You Won this Round! " + hChoice + " beats " + cChoice);
            humanScore += 1;
        } else {
            console.log("You Lost this Round! " + cChoice + " beats " + hChoice);
            computerScore += 1;
        }
    }
    
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("The Score is: " + humanScore + " - " + computerScore);
    if(humanScore > computerScore) {
        console.log("Congratulations! You Win the Game!!!");
    } else if (computerScore > humanScore) {
        console.log("You Lost the Game!!");
    } else {
        console.log("Wow!!! It's a Tie!");
    }
}

playGame();