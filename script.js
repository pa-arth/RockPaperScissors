function getComputerChoice () {
    let index = Math.floor(Math.random() * 3) ;
    let arr = ["Rock", "Paper", "Scissors"];
    return arr[index];
}

function clicked () {
    document.querySelector('.rock').style.outline = "1px solid blue"
}

let computerChoice; 
let playerScore = 0;
let computerScore = 0;
// document.querySelector('.rock').style.outline = none;
// document.querySelector('.rock').onclick = clicked();

for (let i = 0; i < 5; ++i) {
    
    computerChoice = getComputerChoice();
    console.log(computerChoice)
    if (computerChoice == "Rock") {
        document.querySelector('.crock').style.outline = "1px solid blue"
    }
    const playerPoints = document.querySelector("#playerScore")
    console.log(playerPoints)
    playerPoints.textContent = `Player score: ${playerScore}`
    const compPoints = document.querySelector("#compScore")
    console.log(compPoints)
    compPoints.textContent = `Computer score: ${computerScore}`

    
}