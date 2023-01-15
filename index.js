const computerChoiceDisplay = document.getElementById("computerChoice");
const userChoiceDisplay = document.getElementById("userChoice");
const userScoreDisplay = document.getElementById("userScore");
const computerScoreDisplay = document.getElementById("computerScore");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll(".button1");

let userChoice;
let computerChoice;


function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    if(randomNumber == 1){
        computerChoice = "rock"
    }
    if(randomNumber == 2){
        computerChoice = "paper";
    }
    if(randomNumber == 3){
        computerChoice = "scissors";
    }

    computerChoiceDisplay.textContent = computerChoice;
}


function getResult(){
    if(computerChoice === userChoice){
        resultDisplay.textContent = "Balance";
    }

    if(userChoice == "rock" && computerChoice == "paper"){
        computerScoreDisplay.textContent++;
        resultDisplay.textContent = "You lose!";
    }

    if(userChoice == "rock" && computerChoice == "scissors"){
        userScoreDisplay.textContent++;
        resultDisplay.textContent = "You win!";
    }

    if(userChoice == "paper" && computerChoice == "rock"){
        userScoreDisplay.textContent++;
        resultDisplay.textContent = "You win!";
    }
    if(userChoice == "paper" && computerChoice == "scissors"){
        computerScoreDisplay.textContent++;
        resultDisplay.textContent = "You lose!";
    }
    if(userChoice == "scissors" && computerChoice == "paper"){
        userScoreDisplay.textContent++;
        resultDisplay.textContent = "You win!";
    }
    if(userChoice = "scissors" && computerChoice == "rock"){
        computerScoreDisplay.textContent++;
        resultDisplay.textContent = "You lose!";
    }

}

function runGame() {
    possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {

        userChoice = e.target.id;
        userChoiceDisplay.textContent = userChoice;
        generateComputerChoice();
    
        getResult();
    }))
}

runGame()


