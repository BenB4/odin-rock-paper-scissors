console.log("test")

function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3);
    return choiceNumber == 2 ? "rock" :
        choiceNumber == 1 ? "scissors" :
        "paper";
}