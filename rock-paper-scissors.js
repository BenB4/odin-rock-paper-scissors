

function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3);
    return choiceNumber == 2 ? "rock" :
        choiceNumber == 1 ? "scissors" :
        "paper";
}

function getUserChoice() {
    let userChoice;
    let validChoice = false;
    while (!validChoice) {
        userChoice = prompt("choose rock, paper, or scissors. Or test your luck!")
        if (userChoice != null) {
            validChoice = userChoice.toLowerCase() == "rock"
            || userChoice.toLowerCase() == "paper"
            || userChoice.toLowerCase() == "scissors";
            if (userChoice == "") {return getComputerChoice()}
        }
    }
    return userChoice;
}



function playRound(event, userChoice, computerChoice) {
    // returns true if user wins, null if a tie
    let winMsg = "You win! " + userChoice + " beats " + computerChoice;
    let loseMsg = "You Lose! " + userChoice + " loses to " + computerChoice;
    let tieMsg = "Tie! " + userChoice + " ties with " + computerChoice;
    if (userChoice == computerChoice) {
        resultDiv.textContent = (tieMsg)
    } else if (userChoice == "rock") {
        resultDiv.textContent = (computerChoice == "paper" ? loseMsg : winMsg)
        computerChoice == "paper" ? computerScore.textContent++ : playerScore.textContent++
    } else if (userChoice == "paper") {
        resultDiv.textContent = (computerChoice == "paper" ? loseMsg : winMsg)
        computerChoice == "scissors" ? computerScore.textContent++ : playerScore.textContent++
    } else {
        resultDiv.textContent = (computerChoice == "paper" ? loseMsg : winMsg)
        computerChoice == "rock" ? computerScore.textContent++ : playerScore.textContent++
    }
    checkWinner()
}

function checkWinner() {
    if (playerScore.textContent >= 5) {
        resultDiv.textContent = "You won 5 rounds! GG!";
    } else if (computerScore.textContent >= 5) {
        resultDiv.textContent = "You lost 5 rounds :(. GG Computer!"
    }
}


const userOptionsDiv = document.getElementById("playerOptions");
const options = Array.from(userOptionsDiv.children);
const resultDiv = document.getElementById("resultMsg");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

options.forEach((choice) => {
    choice.addEventListener("click", (e) => playRound(e, choice.id, getComputerChoice()))
})