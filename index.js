let seconds = 0;
let interval;

function countDown() {
  let sec = seconds < 10 ? "0" + seconds : seconds;
  countdownDisplay.textContent = `${minutes}:${sec}`;
  if (minutes > 0 && seconds === 0) {
    --minutes;
    seconds = 59;
  } else if (seconds > 0) {
    --seconds;
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
    minutes = choice.value;
    choice.value = "";
    clearInterval(interval);
    interval = setInterval(countDown, 1000);
  }
});
