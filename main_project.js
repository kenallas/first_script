alert("Welcom to a Game where you play five ronds, are you ready?!");
let compWin = 0;
let playerWin = 0;
const computerSel = ["rock", "paper", "scissors"];
for (let i = 1; i <= 5; i++) 
{
    let answer = prompt(`Fill in Rock, Paper or Scissors please?: `, `${i}`);
    if ((answer === null) || (answer === undefined))
    {
        break;
    }
    let computerSelection = computerPlay ();
    while (((answer.length) >= 4) && ((answer.length) <= 8) && (testinput(answer) === true)) 
    {
        if (answer.toLowerCase() === computerSelection) 
        {
        console.log (`The computer says ${computerSelection}, and you say ${answer}, you win, it's a draw!`);
        playerWin++;
        break;
        } 
        else if (answer.toLowerCase() < computerSelection) 
        {
        console.log (`The computer says ${computerSelection}, and you say ${answer}, the computer wins!`);
        compWin++;
        break;
        } 
        else if (answer.toLowerCase() > computerSelection)
        {
        console.log (`The computer says ${computerSelection}, and you say ${answer}, you win!`);
        playerWin++;
        break;
        }
    } 
    if ((answer.length) < 4)
    {
        compWin++;
        alert (`The computer says ${computerSelection}, and you say ${answer}, your input is not wright, you lose this round!`);
    } 
    else if ((answer.length) > 8) 
    {
        compWin++;
        alert (`The computer says ${computerSelection}, and you say ${answer}, your input is not wright, you lose this round!`);
    }
}
function testinput(answer)
{
    switch (answer)
    {
        case computerSel[0]:
        return true;
        case computerSel[1]:
        return true;
        case computerSel[2]:
        return true;
    }
    return false;
}
function computerPlay() 
{
    return computerSel[Math.floor(Math.random() *3)];
}
if (playerWin > compWin) 
{
    console.log (`In total you win with ${playerWin} to ${compWin}`);
}
else {
    console.log (`You lose with ${compWin} to ${playerWin}`);
}
console.log ("This is the end of the game!");