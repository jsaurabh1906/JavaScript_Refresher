const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-btn");
const message = document.getElementById("message");
const restartButton = document.getElementById("restart-btn");
const attemptsDisplay = document.getElementById("attempts");
const guessesDisplay = document.getElementById("guesses");

let randomNumber;
let attempts;
let guessess;

const validateInput = () => {
  const guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return false;
  }
  return true;
};

const initGame = () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  //   console.log("Random Number: " + randomNumber);
  attempts = 10;
  guessess = [];

  // initial UI setup
  message.textContent =
    "Guess a number between 1 and 100. You have 10 attempts.";
  attemptsDisplay.textContent = `${attempts}`;
  guessesDisplay.textContent = `${guessess.join(", ")}`;
  guessInput.value = "";

  guessButton.disabled = false;
  restartButton.classList.add("hidden");
};

const handleGuess = () => {
  const userGuess = parseInt(guessInput.value);
  //   console.log("User Guess: " + userGuess);

  if (!validateInput()) {
    return;
  }

  guessess.push(userGuess);
  attempts--;

  updateUI();

  if (userGuess === randomNumber) {
    message.textContent = `Congratulations! You guessed the number ${randomNumber} in ${10 - attempts} attempts.`;
    endGame();
  } else if (attempts === 0) {
    message.textContent = `Game over! The number was ${randomNumber}.`;
    endGame();
  } else if (userGuess < randomNumber) {
    message.textContent = "Too low! Try again.";
  } else {
    message.textContent = "Too high! Try again.";
  }
};

const updateUI = () => {
  attemptsDisplay.textContent = `${attempts}`;
  guessesDisplay.textContent = `${guessess.join(", ")}`;
};

const endGame = () => {
  guessButton.disabled = true;
  restartButton.classList.remove("hidden");
};

guessButton.addEventListener("click", handleGuess);
restartButton.addEventListener("click", initGame);

initGame();
