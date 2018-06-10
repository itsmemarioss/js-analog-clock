const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let hrPosition = 20;
let minPosition = 130;
let secPosition = 267;

function runTheClock(){
  var date = new Date();

  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  hrPosition = hr*360/12;
  minPosition = (min*360/60)+(sec*(360/60)/60);
  secPosition = sec*360/60;


  HOURHAND.style.transform = "rotate("+ hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate("+ minPosition + "deg)";
  SECONDHAND.style.transform = "rotate("+ secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000);
