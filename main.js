function game() {
    let computerScore = 0;
    let playerScore = 0;

    function getComputerChoice() {
        let result;
    
        choice = Math.floor((Math.random() * 3) + 1);
        switch(choice) {
            case 1:
                result = "rock";
                break;
            case 2:
                result = "paper";
                break;
            case 3:
                result = "scissors";
                break;
        }
    
        return result;
    }
    
    function getPlayerChoice() {
        return prompt("Make your choice: rock | paper | scissors").toLowerCase();
    }
    
    function playRound(computerSelection, playerSelection) {
        let result;
        if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
            result = "Wrong choice!";
        } else if (playerSelection == computerSelection) {
            computerScore += 1;
            result = `Computer chose: ${computerSelection} | Your choice: ${playerSelection} | Result: It's a draw! \nCurrent Score: Computer - ${computerScore} | You - ${playerScore}`;
        } else if (computerSelection == "paper" && playerSelection == "rock") {
            computerScore += 1;
            result = `Computer chose: ${computerSelection} | Your choice: ${playerSelection} | Result: You Lose! \nCurrent Score: Computer - ${computerScore} | You - ${playerScore}`;
        } else if (computerSelection == "scissors" && playerSelection == "paper") {
            computerScore += 1;
            result = `Computer chose: ${computerSelection} | Your choice: ${playerSelection} | Result: You Lose! \nCurrent Score: Computer - ${computerScore} | You - ${playerScore}`;
        } else if (computerSelection == "rock" && playerSelection == "scissors") {
            computerScore += 1;
            result = `Computer chose: ${computerSelection} | Your choice: ${playerSelection} | Result: You Lose! \nCurrent Score: Computer - ${computerScore} | You - ${playerScore}`;
        } else {
            playerScore += 1;
            result = `Computer chose: ${computerSelection} | Your choice: ${playerSelection} | Result: You Win! \nCurrent Score: Computer - ${computerScore} | You - ${playerScore}`;
        }
    
        return result;
    }

    while (playerScore !== 5 && computerScore !== 5) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        let result = playRound(computerSelection, playerSelection);
        alert(result);
    }
    
   if (playerScore === 5) {
    alert(`Final Score: Computer ${computerScore} - Player ${playerScore} \nCongratulations! You Win the Game! 🎉`)
   } else {
    alert(`Final Score: Computer ${computerScore} - Player ${playerScore} \nOops! You Lose the Game. Better luck next time! 🙁`)
   }
}

game()