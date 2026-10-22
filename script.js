
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);

    if (random === 0) return "rock";
    else if (random === 1) return "paper";
    return "scissor";
}

let humanScore = document.querySelector(".human-score");
let computerScore = document.querySelector(".compt-score");
let gameResult = document.querySelector(".game-result");
let roundResult = document.querySelector(".round-result");
let choices = document.querySelector(".choices");

let gameOver = false;

function playGame(humanChoice) {
    if (gameOver) return;

    const computerSelection = getComputerChoice();

    const playRound = (humanChoice, computerChoice) => {
        if (humanChoice === computerChoice) {
            roundResult.textContent =
                "It's a tie! You both selected " + humanChoice + ".";
        } else if (
            (humanChoice === "rock" && computerChoice === "scissor") ||
            (humanChoice === "scissor" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            roundResult.textContent =
                "You win this round! " + humanChoice +
                " beats " + computerChoice + ".";

            humanScore.textContent = Number(humanScore.textContent) + 1;
        } else {
            roundResult.textContent =
                "You lose this round! " + computerChoice +
                " beats " + humanChoice + ".";

            computerScore.textContent = Number(computerScore.textContent) + 1;
        }
    };

    playRound(humanChoice, computerSelection);

    let hS = Number(humanScore.textContent);
    let cS = Number(computerScore.textContent);

    if (hS === 5 || cS === 5) {
        gameOver = true;

        if (hS === 5) {
            gameResult.textContent = "Congratulations! You won the game!";
        } else {
            gameResult.textContent = "Game over! The computer won.";
        }

        choices.querySelectorAll("button").forEach(button => {
            button.disabled = true;
        });

        let restart = document.createElement("button");
        restart.textContent = "Play Again";
        document.querySelector(".results").appendChild(restart);

        restart.addEventListener("click", () => {
            humanScore.textContent = "0";
            computerScore.textContent = "0";
            roundResult.textContent = "";
            gameResult.textContent = "";
            gameOver = false;

            choices.querySelectorAll("button").forEach(button => {
                button.disabled = false;
            });

            restart.remove();
        });
    }
}

choices.addEventListener("click", (e) => {
    if (!e.target.matches("button")) return;

    let humanChoice = e.target.textContent.toLowerCase();
    playGame(humanChoice);
});
