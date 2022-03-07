const buttons = document.querySelectorAll('button');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const results = document.querySelector('.results');

let userSelection;
let round = 0;
const choices = ['Rock','Paper','Scissors'];
let scores =[{name:"user",score: 0},{name:"computer",score: 0}];

buttons.forEach( button => {
    button.addEventListener('click', (e) => {
        if (round > 4) {
            results.innerHTML = getWinner();
            round = 0;
            scores.forEach(score => {
                score.score = 0;
            })
            return;
        }
        userSelection = e.target.id;
        userSelection = userSelection[0].toUpperCase() +userSelection.slice(1);
        computerSelection =  choices[Math.floor(Math.random()*choices.length)];
        updateWinner(userSelection,computerSelection);
        playerScore.innerHTML = scores[0].score;
        computerScore.innerHTML = scores[1].score;
        round++;
    })
});

function getWinner() {
    if (scores[0].score > scores[1].score){
        return scores[0].name;
    }
    else if (scores[0].score < scores[1].score){
        return scores[1].name;
    }
    return "Tie"
}

function updateWinner(userSelection, computerSelection) {
    results.innerHTML =`You: ${userSelection} | Comp: ${computerSelection}`;
    switch(userSelection + computerSelection) {
        case 'ScissorsPaper':
        case 'RockScissors':
        case 'PaperRock':
            results.innerHTML += "<br>You won this round!"
            scores[0].score++;
            break;
        case 'PaperScissors':
        case 'ScissorsRock':
        case 'RockPaper':
            results.innerHTML += "<br>You lost this round!"
            scores[1].score++;
            break;
        case 'ScissorsScissors':
        case 'PaperPaper':
        case 'RockRock':
            results.innerHTML += "<br>Tie";
            break;
        default:
            console.log("Default");

    }
}
