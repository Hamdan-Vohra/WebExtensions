let seconds = 0;
let interval = null;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const restartBtn = document.getElementById("restart");
const stopBtn = document.getElementById("stop");

// Function to update timer display
function updateDisplay() {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  timerDisplay.textContent = `${mins}:${secs}`;
}

// Start timer
function startTimer() {
  if (!interval) {
    interval = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
  }
}

// Pause timer
function pauseTimer() {
  clearInterval(interval);
  interval = null;
}

// Restart timer (reset + start)
function restartTimer() {
  seconds = 0;
  updateDisplay();
  startTimer();
}

// Stop timer (reset + pause)
function stopTimer() {
  pauseTimer();
  seconds = 0;
  updateDisplay();
}

// Button event listeners
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
restartBtn.addEventListener("click", restartTimer);
stopBtn.addEventListener("click", stopTimer);

// Initialize display
updateDisplay();
