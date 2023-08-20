while (true) {
    let userAction = prompt("Pick rock, paper or scissors")
    let compAction = Math.floor(Math.random() * 4)

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
        case 1:
            console.log("Computer chose rock.");
            break;
        case 2:
            console.log("Computer chose paper.");
            break;
        case 3:
            console.log("Computer chose scissors.");
            break;
}



    if (userAction === "rock" && compAction === 3) {
        console.log("Rock smashes scissors. You win!");

    } else if (userAction === "rock" && compAction === 2) {
        console.log("Paper covers rock. You lose.");

    } else if (userAction === "paper" && compAction === 1) {
        console.log("Paper covers rock. You win!");

    } else if (userAction === "paper" && compAction === 3) {
        console.log("Scissors cuts paper. You lose.");

    } else if (userAction === "scissors" && compAction === 3) {
        console.log("Scissors cuts paper. You win!")

    } else if (userAction === "scissors" &&  compAction === 1) {
        console.log("Rock smashes scissors. You lose.")

    } else {
        console.log("It's a tie!")
    }

    let playAgain = prompt("Do you wish to play again?")

    if (playAgain.toLowerCase() !== "y") {
        break;
    }
}
