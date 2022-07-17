alert("Welcom to a Game where you play vijf ronds, are you ready?!");
let compWin = 0;
let playerWin = 0;
function computerPlay() {
    let computerSel = ["rock", "paper", "scissors"];
    return computerSel[Math.floor(Math.random() *3)];
}
function testAnswer() 
{
    if (playerSelection = "rock") {
    return true;
    }
    else if (playerSelection = "paper") {
    return true;
    }
    else if (playerSelection = "scissors") {
    return true;
    }
    else {
    return false;
    }
    return false;
}
for (let i = 1; i <= 5; i++) {
    let answer = prompt(`Fill in Rock, Paper or Scissors please?: `, `round ${i}`);
    let playerSelection = answer.toLowerCase();
    let goodAnswer = testAnswer();
    let computerSelection = computerPlay ();
if (goodAnswer == true) {
    if (playerSelection === computerSelection) 
    {
     console.log(`The computer says ${computerSelection}, and you say ${answer}, you win, its the same!`);
     playerWin++;
    } 
    else if (playerSelection < computerSelection) 
    {
    console.log(`The computer says ${computerSelection}, and you say ${answer}, the computer wins!`);
    compWin++;
    } 
    else if (playerSelection > computerSelection)
    {
    console.log(`The computer says ${computerSelection}, and you say ${answer}, you win!`);
    playerWin++;
    }
    }
else if (goodAnswer == false) {
    compWin++;
    alert(`The computer says ${computerSelection}, and you say ${answer}, your input is not wright, you lose this round!`);
    let answer = prompt(`Please fill in the form wright and fill in Rock, Paper or Scissors please?: `, `round ${i}`);
}
    }
if (playerWin > compWin) {
    console.log(`In total you win with ${playerWin} to ${compWin}`);
}
else {
    console.log(`You lose with ${compWin} to ${playerWin}`);
}
console.log("The end of the game!");