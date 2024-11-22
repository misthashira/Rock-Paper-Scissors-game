function playGame() {
    const choices = [ "rock" ,"paper", "scissors"];
    const playerChoice = document.getElementById("Player").value.toLowerCase();
    
    
    if( !choices.includes(playerChoice))
    {
        document.getElementById("GameResult").textContent ="value entered is invalid Input Rock Paper or Scissors to Start game";
        return;
    }
    const ComputerChoice = choices[Math.floor(Math.random () * choices.length)] ;

    let Result ="";

    if ( playerChoice === ComputerChoice){
        Result = "its a tie!";
    }


    else if (  
        (playerChoice === "rock" && ComputerChoice ==="scissors") ||
        ( playerChoice==="paper" && ComputerChoice ==="rock") ||
        (playerChoice ==="scissors" && ComputerChoice ==="paper")
    )
    {
        Result ="Player Wins !"
    }
    else(
        Result ="Computer Wins !"
    )


    document.getElementById("GameResult").innerHTML = `
     YouChoose : <b> ${playerChoice} </b> <br>
     computerChoose : <b> ${ComputerChoice} </b><br>
     <b> ${Result}</b>
     ;`
}



