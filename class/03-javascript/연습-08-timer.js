let time = 10;
setInterval(() => {
  if (time >= 0) {
    console.log(time);
    time--;
  }
}, 1000);

time = 180;

setInterval(() => {
  minute = String(Math.floor(time / 60)).padStart(2, "0");

  second = String(time % 60).padStart(2, "0");
  if (time >= 0) {
    console.log(`${minute}분 ${second}초`);
    time--;
  }
}, 1000);
