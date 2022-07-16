alert("Welcom to a Game where you play vijf ronds, are you ready!");
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
    } 
    else if (playerSelection < computerSelection) 
    {
    console.log(`The computer says ${computerSelection}, and you say ${playerSelection}, the computer wins!`);
    } 
    else if (playerSelection > computerSelection)
    {
    console.log(`The computer says ${computerSelection}, and you say ${playerSelection}, you win!`);
    }
    else if (playerSelection != computerSel)
    {
    console.log(`The computer says ${computerSelection}, and you say ${playerSelection}, please fill in a valid value`);
    } 
}
console.log("The end of the game!");