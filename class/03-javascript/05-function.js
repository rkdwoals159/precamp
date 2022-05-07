let isStarted = false;
const change = () => {
  if (!isStarted) {
    document.getElementById("auth").disabled = false;
    isStarted = true;
    const number = Math.random() * 1000000;
    document.getElementById("greeting").innerText = String(
      Math.floor(number)
    ).padStart(6, "0");
    document.getElementById("greeting").style.color =
      "#" + String(Math.floor(number)).padStart(6, "0");

    let time = 2;
    //  timer = null;
    let timer = setInterval(() => {
      let minute = String(Math.floor(time / 60));
      let second = String(time % 60).padStart(2, "0");
      if (time >= 0) {
        document.getElementById("clock").innerText = `${minute}:${second}`;

        time--;
      } else {
        document.getElementById("auth").disabled = true;
        isStarted = false;
        console.log("timer3:" + timer);

        clearInterval(timer);
        console.log("hello");
        console.log("timer:" + timer);
      }
    }, 1000);
    console.log("hello2");
    console.log("timer2:" + timer);
  }
};
