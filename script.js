function getComputerChoice () {
    let index = Math.floor(Math.random() * 3) 
    let arr = ["Rock", "Paper", "Scissors"]
    return arr[index]
}

console.log(getComputerChoice())