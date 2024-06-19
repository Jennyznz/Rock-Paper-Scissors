let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let choice = "";
    while (choice == "") {           // in case the user misspells
        let input = prompt("rock, paper, or scissors?");
        input = input.trim().toLowerCase();        // eliminates extraneous spacing and capitalizations
        if ((input == "rock") || (input == "paper") || (input == "scissors")){
            choice = input;
        }
    }
    return choice;
}

function playRound(human, computer) {
    if (human == "rock") {
        if (computer == "rock") {
            console.log("It's a tie! You both chose Rock.");
        }   
        else if (computer == "paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore ++;
        }
        else if (computer == "scissors") {
            console.log("You win! Scissors beat Paper.");
            humanScore ++;
       }

    }
    else if (human == "paper") {
        if (computer == "rock") {
            console.log("You win! Paper beats Rock.");
            humanScore ++;
        }   
        else if (computer == "paper") {
            console.log("It's a tie!. You both chose Paper.");
        }
        else if (computer == "scissors") {
            console.log("You lose! Scissors beat Paper.");
            computerScore ++;
        }
    }
    else {      // human chooses scissors
        if (computer == "rock") {
            console.log("You lose! Rock beats Scissors.");
            computerScore ++;
        }   
        else if (computer == "paper") {
            console.log("You win!. Scissors beat paper.");
            humanScore ++;
        }
        else if (computer == "scissors") {
            console.log("It's a tie! You both chose scissors.");
       }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore) {
        console.log(`You win the game! Score: ${humanScore} / 5`);
    }
    else if (humanScore < computerScore) {
        console.log(`You lost the game. Score: ${humanScore} / 5`);
    }
    else if (humanScore == computerScore) {
        console.log(`It's a draw. Both you and the computer scored ${humanScore} points`);
    }
}

console.log(playGame());
