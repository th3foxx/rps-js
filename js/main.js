function game() {
    let computerScore = 0;
    let playerScore = 0;
    let gameOver = false;

    const resultUi = document.querySelector(".results-ui");
    const roundResult = document.createElement("h3");
    roundResult.style.cssText = "font-size: 24px;";
    const resultDiscription = document.createElement("h3");
    resultDiscription.style.cssText = "font-size: 24px; margin-top: 5px;"
    const resultHeading = resultUi.querySelector("h3");

    const computerCard = document.querySelector(".computer-card");
    const computerCardImg = document.createElement("img");

    const playerCard = document.querySelector(".player-card");
    const playerCardImg = document.createElement("img");

    const playerScoreBlock = document.querySelector("#player-score");
    const computerScoreBlock = document.querySelector("#computer-score");

    const modalWindow = document.querySelector(".modal");
    const playBtn = modalWindow.querySelector("#play-btn");
    const modalOverlay = document.querySelector(".overlay");
    const gameResult = document.createElement("h3");
    modalOverlay.addEventListener("click", () => {
        modalWindow.classList.toggle("show");
    });

/* This code block is adding an event listener to the `playBtn` element. When the button is clicked, it
performs the following actions:
- Sets the `gameOver` variable to `false`.
- Resets the `playerScore` and `computerScore` variables to 0.
- Updates the text content of the `playerScoreBlock` and `computerScoreBlock` elements to display
the updated scores.
- Toggles the "show" class on the `modalWindow` element, hiding it from view.
- Clears the text content of the `roundResult`, `resultDiscription`, and `gameResult` elements.
- Sets the text content of the `playerCard` and `computerCard` elements to "?" to hide the previous
choices. */
    playBtn.addEventListener("click", () => {
        gameOver = false;
        playerScore = 0;
        computerScore = 0;

        playerScoreBlock.textContent = playerScore;
        computerScoreBlock.textContent = computerScore;
        
        modalWindow.classList.toggle("show");
        
        roundResult.textContent = "";
        resultDiscription.textContent = "";
        gameResult.textContent = "";

        playerCard.textContent = "?";
        computerCard.textContent = "?";
    });
  
    
/**
 * The function `getComputerChoice()` randomly selects a choice (rock, paper, or scissors) for the
 * computer and updates the corresponding image and text on the computer's card.
 * @returns The variable `result` is being returned.
 */
    function getComputerChoice() {
        let result;
    
        choice = Math.floor((Math.random() * 3) + 1);
        switch(choice) {
            case 1:
                result = "rock";
                computerCardImg.setAttribute("src", "./img/computer/rock.png");
                computerCardImg.setAttribute("alt", "rock");
                computerCardImg.style.cssText = "transform: rotate(30deg);"
                computerCard.textContent = "";
                computerCard.appendChild(computerCardImg);
                break;
            case 2:
                result = "paper";
                computerCardImg.setAttribute("src", "./img/computer/paper.png");
                computerCardImg.setAttribute("alt", "paper");
                computerCardImg.style.cssText = "transform: rotate(30deg);"
                computerCard.textContent = "";
                computerCard.appendChild(computerCardImg);
                break;
            case 3:
                result = "scissors";
                computerCardImg.setAttribute("src", "./img/computer/scissors.png");
                computerCardImg.setAttribute("alt", "scissors");
                computerCardImg.style.cssText = "transform: rotate(30deg);"
                computerCard.textContent = "";
                computerCard.appendChild(computerCardImg);
                break;
        };
    
        return result;
    }
    
/**
 * The function sets the image and alt text of the player's card based on their choice of rock, paper,
 * or scissors.
 * @param playerChoice - The parameter `playerChoice` is a string that represents the choice made by
 * the player. It can be one of three values: "rock", "paper", or "scissors".
 */
    function setPlayerChoiceImg(playerChoice) {
        switch(playerChoice) {
            case "rock":
                playerCardImg.setAttribute("src", "./img/player/rock.png");
                playerCardImg.setAttribute("alt", "rock");
                playerCardImg.style.cssText = "transform: rotate(-30deg);"
                playerCard.textContent = "";
                playerCard.appendChild(playerCardImg);
                break;
            case "paper":
                playerCardImg.setAttribute("src", "./img/player/paper.png");
                playerCardImg.setAttribute("alt", "paper");
                playerCardImg.style.cssText = "transform: rotate(-30deg);"
                playerCard.textContent = "";
                playerCard.appendChild(playerCardImg);
                break;
            case "scissors":
                playerCardImg.setAttribute("src", "./img/player/scissors.png");
                playerCardImg.setAttribute("alt", "scissors");
                playerCardImg.style.cssText = "transform: rotate(-30deg);"
                playerCard.textContent = "";
                playerCard.appendChild(playerCardImg);
                break;
        };
    };

/**
 * The function `playRound` determines the winner of a round of rock-paper-scissors and updates the
 * scores accordingly.
 * @param computerSelection - The computer's selection in the game. It can be either "rock", "paper",
 * or "scissors".
 * @param playerSelection - The player's selection in the game. It can be "rock", "paper", or
 * "scissors".
 */
    function playRound(computerSelection, playerSelection) {
        let result;

        if (playerSelection == computerSelection) {
            computerScore += 1;
            roundResult.textContent = "It's a tie!";
            resultUi.appendChild(roundResult);
            resultDiscription.textContent = `${playerSelection} ties with ${computerSelection}`;
            resultHeading.insertAdjacentElement("afterend", resultDiscription);

        } else if (computerSelection == "paper" && playerSelection == "rock") {
            computerScore += 1;
            roundResult.textContent = "You Lost!";
            resultUi.appendChild(roundResult);
            resultDiscription.textContent = `${playerSelection} is beaten by ${computerSelection}`;
            resultHeading.insertAdjacentElement("afterend", resultDiscription);
        } else if (computerSelection == "scissors" && playerSelection == "paper") {
            computerScore += 1;
            roundResult.textContent = "You Lost!";
            resultUi.appendChild(roundResult);
            resultDiscription.textContent = `${playerSelection} is beaten by ${computerSelection}`;
            resultHeading.insertAdjacentElement("afterend", resultDiscription);
        } else if (computerSelection == "rock" && playerSelection == "scissors") {
            computerScore += 1;
            roundResult.textContent = "You Lost!";
            resultUi.appendChild(roundResult);
            resultDiscription.textContent = `${playerSelection} is beaten by ${computerSelection}`;
            resultHeading.insertAdjacentElement("afterend", resultDiscription);
        } else {
            playerScore += 1;
            roundResult.textContent = "You Won!";
            resultUi.appendChild(roundResult);
            resultDiscription.textContent = `${playerSelection} beats ${computerSelection}`;
            resultHeading.insertAdjacentElement("afterend", resultDiscription);
        };
    
        playerScoreBlock.textContent = playerScore;
        computerScoreBlock.textContent = computerScore;
    };

    const choiceBtns = document.querySelectorAll(".choice-card-btn");

/* This code block is adding an event listener to each element in the `choiceBtns` array. When one of
the buttons is clicked, the following actions are performed:
- The `getComputerChoice()` function is called to randomly select a choice for the computer.
- The `id` of the clicked button is assigned to the `playerSelection` variable.
- The `setPlayerChoiceImg()` function is called to set the image and alt text of the player's card
based on their choice.
- If the `gameOver` variable is `false`, the `playRound()` function is called with the
`computerSelection` and `playerSelection` as arguments to determine the winner of the round and
update the scores.
- The `checkWin()` function is called with the `playerScore` and `computerScore` as arguments to
check if either player has reached a score of 5 and end the game if necessary. */
    choiceBtns.forEach((choice) => {
        choice.addEventListener("click", () => {
            const computerSelection = getComputerChoice();
            const playerSelection = choice.id;
            setPlayerChoiceImg(playerSelection);
            if (!gameOver) {
                playRound(computerSelection, playerSelection);
            };
            checkWin(playerScore, computerScore);
        });
    });

/**
 * The function `checkWin` checks if the player or computer has reached a score of 5 and displays the
 * corresponding game result message.
 * @param playerScore - The score of the player in the game.
 * @param computerScore - The computer's score in the game.
 */
    function checkWin(playerScore, computerScore) {
        if (playerScore === 5) {
            gameOver = true;
            gameResult.textContent = "Congratulations! You Win the Game! 🎉";
            playBtn.insertAdjacentElement("beforebegin", gameResult);
            modalWindow.classList.toggle("show");
           } else if (computerScore === 5) {
            gameOver = true;
            gameResult.textContent = "Oops! You Lose the Game. Better luck next time! 🙁";
            playBtn.insertAdjacentElement("beforebegin", gameResult);
            modalWindow.classList.toggle("show");
           };
    };
}

game();