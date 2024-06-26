const bContainer = document.querySelector(".b-container");

let humanChoice = "";
let compChoice = "";
let roundOutcome = "";
let isOver = false;
let humanReport = document.querySelector("#humanReport");
let computerReport = document.querySelector("#computerReport");
let extras = document.querySelector("#extras");
let humanScore = 0;
let computerScore = 0;

bContainer.addEventListener("click", (e) => {
    if (!isOver){
        // track user choice
        const target = e.target;
        humanChoice = target.id;
        // compare user result to randomized output
        compChoice = getComputerChoice();
        roundOutcome = playRound(humanChoice, compChoice);
        // print the round result to webpage
        let div = document.createElement("div");
        extras.appendChild(div);
        div.classList.add("added");
        div.textContent = roundOutcome;
        // update scores
        humanReport.textContent = `You: ${humanScore}/5`;
        computerReport.textContent = `Computer: ${computerScore}/5`;
        // check if the game is now over
        if (humanScore == 5) {
            let banner = document.createElement("div");
            extras.appendChild(banner);
            banner.classList.add("added");
            banner.textContent = "YOU WIN. The game will restart in five seconds.";
            isOver = true;
            setTimeout(restartGame, 5000);
        }
        if (computerScore == 5) {
            let banner = document.createElement("div");
            extras.appendChild(banner);
            banner.classList.add("added");
            banner.textContent = "YOU LOST. The game will restart in five seconds";
            isOver = true;
            setTimeout(restartGame, 5000);
        }
    }
});

function restartGame() {
    let toDelete = document.querySelectorAll(".added");
    toDelete.forEach(line => {
        line.remove();
    });
    humanScore = 0;
    computerScore = 0;
    humanReport.textContent = `You: ${humanScore}/5`;
    computerReport.textContent = `Computer: ${computerScore}/5`;
    isOver = false;
}


function getComputerChoice() {
    let choice = "";
    let rand = (Math.random() * 100);
    if (rand < 34) {
        choice = "rock";
    }
    else if (rand < 67) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    return choice;
}


function playRound(human, computer) {
    if (human == "rock") {
        if (computer == "rock") {
            return "It's a tie! You both chose Rock.";
        }   
        else if (computer == "paper") {
            computerScore ++;
            return "You lose! Paper beats Rock.";
            
        }
        else if (computer == "scissors") {
            humanScore ++;
            return "You win! Rock beats Scissors.";
            
       }

    }
    else if (human == "paper") {
        if (computer == "rock") {
            humanScore ++;
            return "You win! Paper beats Rock.";
            
        }   
        else if (computer == "paper") {
            return "It's a tie!. You both chose Paper.";
        }
        else if (computer == "scissors") {
            computerScore ++;
            return "You lose! Scissors beat Paper.";
            
        }
    }
    else {      // human chooses scissors
        if (computer == "rock") {
            computerScore ++;
            return "You lose! Rock beats Scissors.";
            
        }   
        else if (computer == "paper") {
            humanScore ++;
            return "You win! Scissors beat paper."; 
        }
        else if (computer == "scissors") {
            return "It's a tie! You both chose scissors.";
       }
    }
}