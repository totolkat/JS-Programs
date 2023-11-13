let score = 0

while (true) {
    const randomiser = Math.floor(Math.random() * 6) + 1
    score += randomiser
    console.log(`${randomiser}. Thus, score: ${score}`)

    if (score > 21) {
        console.log("Score greater than 21.")
        break
    } else {
        const rollAgain = prompt("Do you wish to roll again?")
        if (rollAgain !== "y") {
            break
        }
    }
}
