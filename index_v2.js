let totalSeconds;
let interval;

function countDown() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const sec = seconds < 10 ? "0" + seconds : seconds;
  countdownDisplay.textContent = `${minutes}:${sec}`;
  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    countdownDisplay.textContent = "Boom !";
    clearInterval(interval);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isNaN(choice.value)) {
    alert("Please enter a number");
  } else {
    totalSeconds = choice.value * 60;
    choice.value = "";
    clearInterval(interval);
    interval = setInterval(countDown, 1000);
  }
});
