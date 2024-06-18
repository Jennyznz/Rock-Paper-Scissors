console.log(getHumanChoice());

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