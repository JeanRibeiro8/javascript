let timer = document.getElementById("timer");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let seconds = 0;
let interval;

start.addEventListener("click", function () {

    interval = setInterval(function () {
        seconds++;
        timer.textContent = seconds;
    }, 1000);

});

stop.addEventListener("click", function () {
    clearInterval(interval);
});

reset.addEventListener("click", function () {
    clearInterval(interval);
    seconds = 0;
    timer.textContent = seconds;
});   