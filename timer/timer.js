const timer = document.getElementById("timer"); //get the ids
const start = document.getElementById("start");
//event click in start
start.addEventListener("click", function (timer){
//get the number typing..
const number = input.value;



});

//ARRUMAR DEPOIS
//STOPWATCH
let stp = document.getElementById("stp");
let start1 = document.getElementById("start1");

let count = 0;
let interval;

start1.addEventListener("click", function () {

  interval = setInterval(function () {
    stp.value = count;
    count++;

    if (count >= 60) {
      clearInterval(interval);
    }

  }, 1000); // 1000ms = 1 segundo

});