let playerChoice;

function getComputerChoice () {
    let index = Math.floor(Math.random() * 3) ;
    let arr = ["Rock", "Paper", "Scissors"];
    return arr[index];
}

function checkWinner () {
    if (playerScore == 5) {
        document.querySelector('.middle').style.display = "none"
        result.textContent = "Game Over! You beat the computer!"
    }
    else if (computerScore == 5) {
        document.querySelector('.middle').style.display = "none"
        result.textContent = "Game Over! You lost to the computer!"
    }
}

let computerChoice; 
let playerScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll('button');
rock = document.querySelector('.rock');
crock = document.querySelector('.crock');
scissors = document.querySelector('.scissors');
cscissors = document.querySelector('.cscissors');
paper = document.querySelector('.paper');
cpaper = document.querySelector('.cpaper');
result = document.querySelector('.result');
// document.querySelector('.rock').style.outline = none;
// document.querySelector('.rock').onclick = clicked();

let buttarray = Array.from (buttons);

function animate (e) {
    e.classList.add("clickstyle");
    console.log(e.classList);
    setTimeout(e.classList.remove("clickstyle"), 500)
    playGame(e);
    console.log(e.className);
};

buttarray.forEach(element => {
    element.addEventListener("click", function () {animate(element)}, false);
    console.log(element);
});


function playGame (playerInput) {
    playerChoice = playerInput.className

    computerChoice = getComputerChoice();
    console.log("Computer choice", computerChoice)
    console.log("Player choice", playerChoice)
    if (computerChoice == "Rock") {

        if (playerChoice == "scissors") {
            computerScore++
            result.textContent = "You lose!"
        }
        else if (playerChoice == "paper") {
            playerScore++
            result.textContent = "You win!"
        }
        else {
            result.textContent = "It's a tie!"
        }
    }
    else if (computerChoice == "Paper") {

        if (playerChoice == "rock") {
            computerScore++
            result.textContent = "You lose!"
        }
        else if (playerChoice == "scissors") {
            playerScore++
            result.textContent = "You win!"
        }
        else {
            result.textContent = "It's a tie!"
        }
    }
    else {
       
        if (playerChoice == "paper") {
            computerScore++
            result.textContent = "You lose!"
        }
        else if (playerChoice == "rock") {
            playerScore++
            result.textContent = "You win!"
        }
        else {
            result.textContent = "It's a tie!"
        }
    }
    const playerPoints = document.querySelector("#playerScore")
    console.log(playerPoints)
    playerPoints.textContent = `Player score: ${playerScore}`
    const compPoints = document.querySelector("#compScore")
    console.log(compPoints)
    compPoints.textContent = `Computer score: ${computerScore}`
    checkWinner();
}
    