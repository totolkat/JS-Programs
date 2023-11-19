import promptSync from "prompt-sync";
import password from "@inquirer/password";

const prompt = promptSync()


let counter = 0;
const word = await password({message: "Enter word.", mask: true})


while (counter < 3) {
    const guess = prompt("Enter what you think the word is!");

    if (guess !== word) {
        console.log("That's wrong. Try again.");
        counter += 1;

        if (counter === 3) {
            console.log(`You have reached three attempts! The word was ${word}.`);
            
            const playAgain = prompt("Do you wish to play again? (y/n)")

            if (playAgain.toLowerCase() !== "y") {
                break;
            }
        } 

    } else if (guess === word) {
        console.log(`You are right, the word was ${word}! It only took you ${counter} attempts!`);
        break;
    }
}
