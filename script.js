const msg = document.getElementById("click-msg");
const button = document.getElementById("button");
const score = document.getElementById("score");
const timeDisplay = document.getElementById("time");

let timeLeft = 5;
let timerStarted = false;

button.addEventListener("click", () => {
  if (!timerStarted) {
    startTimer();
    timerStarted = true;
    msg.textContent = "CLICK TO SCORE!";
  }

  const currentScore = parseInt(score.innerHTML.split(": ")[1]);
  score.innerHTML = `Score: ${currentScore + 1}`;

  msg.classList.add("fade-out");
  setTimeout(() => msg.classList.remove("fade-out"), 250); // Remove animation
});

function startTimer() {
  timeDisplay.innerHTML = `Time: ${timeLeft}s`;

  const timer = setInterval(() => {
    timeLeft--;
    timeDisplay.innerHTML = `Time: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

function endGame() {
  button.disabled = true;
  button.classList.add("disabled");
  msg.textContent = "Game Over!";
  alert(`Game Over! Your score is ${score.innerHTML.split(": ")[1]}`);
}
