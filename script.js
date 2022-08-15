let playerChoice;

function getComputerChoice () {
    let index = Math.floor(Math.random() * 3) ;
    let arr = ["Rock", "Paper", "Scissors"];
    return arr[index];
}

let computerChoice; 
let playerScore = 0;
let computerScore = 0;

rock = document.querySelector('.rock')
crock = document.querySelector('.crock')
scissors = document.querySelector('.scissors')
csissors = document.querySelector('.cscissors')
paper = document.querySelector('.paper')
cpaper = document.querySelector('.cpaper')
result = document.querySelector('.result')
// document.querySelector('.rock').style.outline = none;
// document.querySelector('.rock').onclick = clicked();



function playGame (playerInput) {
    rock.style.outline = "none"
    crock.style.outline = "none"
    scissors.style.outline = "none"
    csissors.style.outline = "none"
    paper.style.outline = "none"
    cpaper.style.outline = "none"
    playerChoice = playerInput.className
    playerInput.style.outline = "1px solid blue"
    computerChoice = getComputerChoice();
    console.log(computerChoice)
    console.log(playerChoice)
    if (computerChoice == "Rock") {
        crock.style.outline = "1px solid blue"
        if (playerChoice == "scissors") {
            computerScore++
            result.textContent = "You lose"
        }
        else if (playerChoice = "paper") {
            playerScore++
            result.textContent = "You win"
        }
        else {
            result.textContent = "It's a tie!"
        }
    }
    else if (computerChoice == "Paper") {
        cpaper.style.outline = "1px solid blue"
        if (playerChoice == "rock") {
            computerScore++
            result.textContent = "You lose"
        }
        else if (playerChoice = "scissors") {
            playerScore++
            result.textContent = "You win"
        }
        else {
            result.textContent = "It's a tie!"
        }
    }
    else {
        cscissors.style.outline = "1px solid blue"
        if (playerChoice == "paper") {
            computerScore++
            result.textContent = "You lose"
        }
        else if (playerChoice = "rock") {
            playerScore++
            result.textContent = "You win"
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
    // document.button.style.outline = "none"
    
}
    