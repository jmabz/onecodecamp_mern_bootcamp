function guessNumber() {
    // Generate a number between 1 ~ 10.
    let randomValue = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    // Guess what the randomly-generated number is
    let userGuess = parseInt(prompt("Guess the number from 1 ~ 10:"));
    // Check if the user's input is a valid number
    if (isNaN(userGuess) || (userGuess < 1 || userGuess > 10)) {
        alert("Looks like your input doesn't look right, it must be a number from 1 ~ 10.");
        return;
    }
    // Check if the guess is correct
    if (randomValue === userGuess) {
        alert(`You got it, it's ${randomValue}!`);
    } else {
        alert(`You entered ${userGuess}, but the right number is ${randomValue}!`);
    }
}
guessNumber();


