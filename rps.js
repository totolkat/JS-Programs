while (true) {
    let userAction = prompt("Pick rock, paper or scissors")
    let possibleactions = ["rock", "paper", "scissors"]
    let compAction = possibleactions[Math.floor(Math.random() * possibleactions.length)]

    if (userAction.toLowerCase() !== "rock" && userAction.toLowerCase() !== "paper" && userAction.toLowerCase() !== "scissors") {
        console.log("You didn't put rock, paper or scissors...")
        break;
    }

    switch (userAction.toLowerCase()) {
        case "rock":
            console.log("You chose rock.");
            break;
        case "paper":
            console.log("You chose paper.");
            break;
        case "scissors":
            console.log("You chose scissors");
            break;
        }

    switch (compAction) {
        case "rock":
            console.log("Computer chose rock.");
            break;
        case "paper":
            console.log("Computer chose paper.");
            break;
        case "scissors":
            console.log("Computer chose scissors.");
            break;
}



    if (userAction === "rock" && compAction === "scissors") {
        console.log("Rock smashes scissors. You win!");

    } else if (userAction === "rock" && compAction === "paper") {
        console.log("Paper covers rock. You lose.");

    } else if (userAction === "paper" && compAction === "rock") {
        console.log("Paper covers rock. You win!");

    } else if (userAction === "paper" && compAction === "paper") {
        console.log("Scissors cuts paper. You lose.");

    } else if (userAction === "scissors" && compAction === "paper") {
        console.log("Scissors cuts paper. You win!")

    } else if (userAction === "scissors" &&  compAction === "rock") {
        console.log("Rock smashes scissors. You lose.")

    } else {
        console.log("It's a tie!")
    }

    let playAgain = prompt("Do you wish to play again?")

    if (playAgain.toLowerCase() !== "y") {
        break;
    }
}
