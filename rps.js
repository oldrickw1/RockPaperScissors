game();

function game() {
    const results = []
    let rounds 
    do {
        rounds = parseInt(prompt("How many rounds would you like to play?"));
    }
    while (isNaN(rounds))
    for (let i = 1; i <= rounds; i++)
    {
        results.push(playRound(i))
    }
    let numberOfWins = 0;
    let numberOfLosses = 0;
    for (i in results) {
        if (results[i] == "You lost this round") {
            numberOfLosses++;
        }
        else if (results[i] == "You won this round") {
            numberOfWins++;
        }
    }
    if (numberOfWins == numberOfLosses) {
        console.log("Final outcome is a Tie")
    }
    else if (numberOfWins >= numberOfLosses) {
        console.log("You won the game!")
    }
    else {
        console.log("You lost the game :(")
    }
}


function playRound(round) {
    let playerSelection = getPlayerSelection();
    let computerSelection = getComputerSelection();
    return getResult(playerSelection, computerSelection, round);
}

// Determine outcome
function getResult(playerSelection,computerSelection, round) {
    if (playerSelection == computerSelection) { 
        console.log("Round " + round + " is a Tie")
        return "Tie";
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper"
    || playerSelection == "Paper" && computerSelection == "Scissors"
    || playerSelection == "Scissors" && computerSelection == "Rock") {
        console.log("You lost round " + round)
        return "You lost this round";
    }

    else {
        console.log("You won round " + round)
        return "You won this round";
    }
}

// Get computerselection with random integer
function getComputerSelection() {
    let random = Math.floor(Math.random()*10)%3;
    let computerSelection;
    if (random == 0) {
        return "Rock"
    }
    else if (random == 1) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

// Get user input and formatting it
function getPlayerSelection() {
    let playerSelection;
    do {
        playerSelection = prompt("Rock, Paper or Scissors?\n");
    }
    while (playerSelection == "")

    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
    if (playerSelection == "Rock" || playerSelection == "Paper" || playerSelection == "Scissors") {
        return playerSelection;
    }
    else {
        console.log("Must enter valid string")
        getPlayerSelection();
    }
}


