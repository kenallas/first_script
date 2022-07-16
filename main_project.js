alert("Welcom to a Game where you play vijf ronds, are you ready!");
let compWin = 0;
let playerWin = 0;
function computerPlay() {
    let computerSel = ["rock", "paper", "scissors"];
    return computerSel[Math.floor(Math.random() *3)];
}
for (let i = 1; i <= 5; i++) {
    var answer = prompt(`Fill in Rock, Paper or Scissors please?: `, `round ${i}`);
    var playerSelection = answer.toLowerCase();
    let computerSelection = computerPlay ();
    if (playerSelection == computerSelection) 
    {
     console.log(`The computer says ${computerSelection}, and you say ${playerSelection}, you win, its the same!`);
     let playerWin = playerWin++;
    } 
    else if (playerSelection < computerSelection) 
    {
    console.log(`The computer says ${computerSelection}, and you say ${playerSelection}, the computer wins!`);
    let compWin = compWin++;
    } 
    else if (playerSelection > computerSelection)
    {
    console.log(`The computer says ${computerSelection}, and you say ${playerSelection}, you win!`);
    let playerWin = playerWin++;
    }
}
if (playerWin >= compWin) {
    console.log("In total you win!");
}
else {
    console.log("Sorry in total you lose!");
}
console.log("The end of the game!");