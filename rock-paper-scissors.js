let userScore = 0;
let computerScore = 0;

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



function playRound(userChoice, computerChoice) {
    let winMsg = "You win! " + userChoice + " beats " + computerChoice;
    let loseMsg = "You Lose! " + userChoice + " loses to " + computerChoice;
    let tieMsg = "Tie! " + userChoice + " ties with " + computerChoice;
    if (userChoice == computerChoice) {
        console.log(tieMsg)
        return null
    } else if (userChoice == "rock") {
        console.log(computerChoice == "paper" ? loseMsg : winMsg)
        return computerChoice == "paper" ? false : true
    } else if (userChoice == "paper") {
        console.log(computerChoice == "paper" ? loseMsg : winMsg)
        return computerChoice == "scissors" ? false : true
    } else {
        console.log(computerChoice == "paper" ? loseMsg : winMsg)
        return computerChoice == "rock" ? false : true
    }
}


let userChoice = getUserChoice();
let computerScore = getComputerChoice();