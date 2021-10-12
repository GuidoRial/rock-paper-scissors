let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

//Function that picks randomly between the elements of an Array//
function computerSelection () {
    const computerChoises = ["rock", "paper", "scissors"];
    let computerPick = computerChoises[Math.floor(Math.random() * computerChoises.length)];
    return computerPick;
}

//functions for winning and losing the round and game//
function win (userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "You win this round!";
}

function lose (userChoice, computerChoice) {
    computerScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "You lost this round!";
}

function draw (userChoice, computerChoice) {
    result_p.innerHTML = "It\'s a tie!"
}

function winGame () {
    userScore = 0;
    computerScore = 0;
    result_p.innerHTML = "You won the game!";    
}

function loseGame () {
    userScore = 0;
    computerScore = 0;
    result_p.innerHTML = "You lost the game!";    
}

function game(userChoice) {
    const computerChoice = computerSelection();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win();
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose();
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw();
            break;      
    }
    if (computerScore == 5) {
        loseGame();
    }
    else if (userScore == 5) {
        winGame();
    }    
}

function main() {
    rock_div.addEventListener('click', function() {
        game("rock");
    })

    paper_div.addEventListener('click', function() {
        game("paper");
    })

    scissors_div.addEventListener('click', function() {
        game("scissors");
    })
}

main();
