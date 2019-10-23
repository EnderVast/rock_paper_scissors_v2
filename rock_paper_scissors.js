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

let scoreCounterComputer = 0;
let scoreCounterPlayer = 0;
let scoreResult = [0, 0];

function score(game_outcome_score) {
     switch(game_outcome_score) {
         case 1:
             scoreCounterPlayer += 1;
             scoreResult = [scoreCounterPlayer, scoreCounterComputer];
             return scoreResult;
         case 2:
             scoreCounterComputer += 1;
             scoreResult = [scoreCounterPlayer, scoreCounterComputer];
             return scoreResult;
         case 3:
             return scoreResult;
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

function endGame(bothScores) {
    if (bothScores[0] == 5) {
        conclusion.textContent = "Congratulations, You won!";
        conclusiondiv.appendChild(conclusion);
    }
    else if (bothScores[1] == 5) { 
        conclusion.textContent = "Too bad, you lost to a mindless computer. Better luck next time!";
        conclusiondiv.appendChild(conclusion);
    }
}

const conclusiondiv = document.querySelector(".conclusion")
const resultdiv = document.querySelector(".result");
const h3YourScore = document.querySelector("#YourScore")
const h3ComputerScore = document.querySelector("#ComputerScore")
const resultCounterDiv = document.querySelector('.score-counter')
const result = document.createElement('p');
const scoreText = document.createElement('h2');
const conclusion = document.createElement('p')
result.classList.add('resultText');
let bothScores;
let computerScore;
let playerScore;


function playRound(x) {
    let computerSelection = computerPlay();
    let game_outcome = game(x, computerSelection);
    let game_outcome_msg = game_outcome[1];
    let game_outcome_score = game_outcome[0];
    bothScores = score(game_outcome_score);
    playerScore = bothScores[0];
    computerScore = bothScores[1];
    let YourScore = "Your Score: ";
    let ComputersScore = "Computer's Score: "
    YourScore = YourScore.concat(playerScore.toString());
    ComputersScore = ComputersScore.concat(computerScore.toString());
    resultCounterDiv.removeChild(h3YourScore);
    resultCounterDiv.removeChild(h3ComputerScore);
    h3YourScore.textContent = YourScore;
    h3ComputerScore.textContent = ComputersScore;
    resultCounterDiv.appendChild(h3YourScore);
    resultCounterDiv.appendChild(h3ComputerScore);
    console.log(bothScores);
    result.textContent = game_outcome_msg;
    resultdiv.appendChild(result);
    endGame(bothScores);
    }







        