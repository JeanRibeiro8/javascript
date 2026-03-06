let timer = document.getElementById("timer");
let start = document.getElementById("start");

let seconds = 0;
let interval;
let running = false;

start.addEventListener("click", function () {

  if (running === false) {

    interval = setInterval(function () {
      seconds++;
      timer.textContent = seconds;
    }, 1000);

    running = true;

  } else {

    clearInterval(interval);
    running = false;

  }

});