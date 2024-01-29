const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id || e.target.parentNode.id;
    userChoiceDisplay.innerHTML = userChoice;

    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    computerChoice = "rock";
  } else if (randomNumber === 1) {
    computerChoice = "scissors";
  } else {
    computerChoice = "scissors";
  }
  console.log(randomNumber);
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw!";
  } else if (
    (computerChoice === "rock" && userChoice === "paper") ||
    (computerChoice === "scissors" && userChoice === "rock") ||
    (computerChoice === "paper" && userChoice === "scissor")
  ) {
    result = "You win!";
  } else {
    result = "You lost!";
  }

  resultDisplay.innerHTML = result;
}
