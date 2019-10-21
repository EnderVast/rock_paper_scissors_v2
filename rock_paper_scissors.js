function computerPlay() {
    function getRndInteger() {
        return Math.floor(Math.random() * (3)) + 1;
    }
    let random_num = getRndInteger();
    switch(random_num) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function score_tracker(x) {
    if (x == 1) {
        wins += 1;
    }
    if (x == 2) {
        losses += 1;
    }
}

function game(playerSelection, computerSelection) {
    console.log("Game started!");
    let result = [];
    //Draw
    if (playerSelection == computerSelection) {
        result = [3, "Draw!"];
        return result;
    }
    //Player wins
    switch(playerSelection) {
        case "rock" :        //Player chooses Rock
            if (computerSelection == "scissors") {
                result = [1, "You Win! Rock beats Scissors"];
                return result;
            }
            else if (computerSelection == "paper") {
                result = [2, "You Lose! Paper beats Rock"];
                return result;
            }
            break;
        case "paper" :        //Player chooses Paper
            if (computerSelection =="rock") {
                result = [1, "You Win! Paper beats Rock"];
                return result;
            }
            else if (computerSelection == "scissors") {
                result = [2, "You Lose! Scissors beats Paper"];
                return result;
            } 
            break;
        case "scissors" :        //Player chooses Scissors
            if (computerSelection == "paper") {
                result = [1, "You Win! Scissors beats Paper"];
                return result;
            }
            else if (computerSelection == "rock") {
                result = [2, "You Lose! Rock beats Scissors"];
                return result;
            } 
            break;  
    }
}

const resultdiv = document.querySelector(".result");
const result = document.createElement('p');
result.classList.add('resultText');

function playRound(x) {
    let computerSelection = computerPlay();
    let game_outcome = game(x, computerSelection);
    let game_outcome_msg = game_outcome[1];
    //let game_outcome_score = game_outcome[0];
    console.log(game_outcome_msg);
    result.textContent = game_outcome_msg;
    resultdiv.appendChild(result);
    }







        