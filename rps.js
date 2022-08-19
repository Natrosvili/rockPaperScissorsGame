// wichtige Variablen mit DOM-Werten von Id's
const computerChoiceDisplay = document.getElementById("computerChoice");
const userChoiceDisplay = document.getElementById("userChoice");
const userScoreDisplay = document.getElementById("userScore");
const computerScoreDisplay = document.getElementById("computerScore");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll(".button1");

// die Spieler
let userChoice;
let computerChoice;





/*
Diese Funktion generiert die Computerauswahl, indem sie eine Zufallszahl 
von 1 bis 3 wählt, und wir deklarieren die gewählte Zahl entweder mit dem Wert 
"rock", "paper" oder "scissors".
*/
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

    computerChoiceDisplay.innerHTML = computerChoice;
}



/*
Diese Funktion liefert das Ergebnis, indem sie sowohl den Benutzer als auch die Wahl 
des Computers vergleicht, und gibt das Ergebnis an und addiert einen Punkt zur Punktzahl des Gewinners.
*/
function getResult(){
    if(computerChoice == userChoice){
        resultDisplay.innerHTML = "Ausgleich";
    }

    if(userChoice == "rock" && computerChoice == "paper"){
        computerScoreDisplay.innerHTML++;
        resultDisplay.innerHTML = "Sie haben verloren!";
    }

    if(userChoice == "rock" && computerChoice == "scissors"){
        userScoreDisplay.innerHTML++;
        resultDisplay.innerHTML = "Sie haben gewonnen!";
    }

    if(userChoice == "paper" && computerChoice == "rock"){
        userScoreDisplay.innerHTML++;
        resultDisplay.innerHTML = "Sie haben gewonnen!";
    }
    if(userChoice == "paper" && computerChoice == "scissors"){
        computerScoreDisplay.innerHTML++;
        resultDisplay.innerHTML = "Sie haben verloren!";
    }
    if(userChoice == "scissors" && computerChoice == "paper"){
        userScoreDisplay.innerHTML++;
        resultDisplay.innerHTML = "Sie haben gewonnen!";
    }
    if(userChoice = "scissors" && computerChoice == "rock"){
        computerScoreDisplay.innerHTML++;
        resultDisplay.innerHTML = "Sie haben verloren!";
    }

}


/*
Diese Funktion führt das Spiel aus
*/
function runGame() {
    possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {

        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
    
        getResult();
    }))
}

runGame()


