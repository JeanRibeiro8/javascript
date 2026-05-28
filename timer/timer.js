const timer = document.getElementById("timer");

const stopwatch = document.getElementById("stopwatch");

const startBtn = document.getElementById("startBtn");

const pauseBtn = document.getElementById("pauseBtn");

const resetBtn = document.getElementById("resetBtn");

// TIMER VARIABLES
let seconds = 0;

let interval = null;

// STOPWATCH VARIABLES
let milliseconds = 0;

let second = 0;

let minutes = 0;

let hours = 0;

let stopwatchInterval = null;

/* =========================
   TIMER
========================= */

// FORMAT TIMER
function formatTime(sec){

  let hrs = Math.floor(sec / 3600);

  let mins = Math.floor((sec % 3600) / 60);

  let secs = sec % 60;

  hrs = String(hrs).padStart(2, "0");

  mins = String(mins).padStart(2, "0");

  secs = String(secs).padStart(2, "0");

  return `${hrs}:${mins}:${secs}`;

}

// UPDATE TIMER
function updateTimer(){

  seconds++;

  timer.textContent = formatTime(seconds);

}

/* =========================
   STOPWATCH
========================= */

function updateStopwatch(){

  milliseconds++;

  if(milliseconds === 100){

    milliseconds = 0;

    second++;

  }

  if(second === 60){

    second = 0;

    minutes++;

  }

  if(minutes === 60){

    minutes = 0;

    hours++;

  }

  let h = String(hours).padStart(2, "0");

  let m = String(minutes).padStart(2, "0");

  let s = String(second).padStart(2, "0");

  let ms = String(milliseconds).padStart(2, "0");

  stopwatch.textContent = `${h}:${m}:${s}:${ms}`;

}

/* =========================
   BUTTONS
========================= */

// START
startBtn.addEventListener("click", () => {

  // TIMER
  if(interval === null){

    interval = setInterval(updateTimer, 1000);

  }

  // STOPWATCH
  if(stopwatchInterval === null){

    stopwatchInterval = setInterval(updateStopwatch, 10);

  }

});

// PAUSE
pauseBtn.addEventListener("click", () => {

  clearInterval(interval);

  clearInterval(stopwatchInterval);

  interval = null;

  stopwatchInterval = null;

});

// RESET
resetBtn.addEventListener("click", () => {

  // TIMER
  clearInterval(interval);

  interval = null;

  seconds = 0;

  timer.textContent = "00:00:00";

  // STOPWATCH
  clearInterval(stopwatchInterval);

  stopwatchInterval = null;

  milliseconds = 0;

  second = 0;

  minutes = 0;

  hours = 0;

  stopwatch.textContent = "00:00:00:00";

});