const clock = document.querySelector("h2");

function updateClock() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  let hours;
  let minutes;
  let seconds;
  if (hour < 10) {
    hours = "0" + hour;
  } else {
    hour = hour;
  }
  if (minute < 10) {
    minutes = "0" + minute;
  } else {
    minutes = minute;
  }
  if (second < 10) {
    seconds = "0" + second;
  } else {
    seconds = second;
  }
  clock.innerHTML = `${hour}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000)
