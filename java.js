//I'll need a few functions, a computerSelection, a playerSelection that's case sensitive, both will make a round, five of those will make a game//

/*Introduction to the game

let firstIntroduction = alert("The game is simple, win 5 rounds to win a game")
let secondIntroduction = alert("May the better person win. Good luck")
let thirdIntroduction = alert("El que pierde es trolo")
*/

//Function that picks randomly between the elements of an Array//

function computerSelection () {
    const computerChoises = ["rock", "paper", "scissors"];
    let computerPick = computerChoises[Math.floor(Math.random() * computerChoises.length)];
    console.log(computerPick);
    return computerPick;
}


//Function that allows the player to write their choise, as long as they spell correctly, their pick will be changed to lower case and then compared to the computerPick//


function playerSelection () {
    let playerQuestion = prompt("What do you choose?");
    let playerPick = playerQuestion.toLowerCase();
    console.log(playerPick);
    return playerPick;
}




//Function that covers a whole round, it lets you know if you win or lose, and also if you wrote something wrong.


let playerScore = 0;
let computerScore = 0;

function round () {
    let computerPick = computerSelection();
    let playerPick = playerSelection();
        if ((playerPick === "scissors" && computerPick === "paper") || (playerPick === "paper" && computerPick === "rock") || (playerPick === "rock" && computerPick === "scissors")){
            alert("You win this round!");          
            return {
                computerScore,
                playerScore
            };
        }

        else if ((computerPick === "scissors" && playerPick === "paper") || (computerPick === "paper" && playerPick === "rock") || (computerPick === "rock" && playerPick === "scissors")){
            alert("You lost this round!");
            return {
                computerScore,
                playerScore
            };
        }

        else if ((playerPick === "scissors" && computerPick === "scissors") || (playerPick === "paper" && computerPick === "paper") || (playerPick === "rock" && computerPick === "rock")){
            alert("It\'s a tie!");
            return {
                computerScore,
                playerScore
            };
        }
       
        else {
            alert("Invalid input");
            }
        }

round();





/*
function game() {

        for (let i = 1; i <= (playerScore === 5 || computerScore === 5); i++);
            round();

            if (playerScore === 5) {
                alert("You win the game!");
            } else (computerScore === 5); {
                alert("You lost the game!");
            }
    }
*/


