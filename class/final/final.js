const changeFocus1 = () => {
  const phone1 = document.getElementById("phone1").value;
  if (phone1.length >= 3) {
    document.getElementById("phone2").focus();
  }
};
const changeFocus2 = () => {
  const phone2 = document.getElementById("phone2").value;
  if (phone2.length >= 4) {
    document.getElementById("phone3").focus();
  }
};

const set__timer = () => {
  token();
  let time = 180;

  setInterval(() => {
    minute = String(Math.floor(time / 60)).padStart(2, "0");

    second = String(time % 60).padStart(2, "0");
    if (time >= 0) {
      document.getElementById("minute").innerText = minute + ":" + second;
      time--;
    }
  }, 1000);
};

const token = () => {
  number = Math.random() * 1000000;
  number = String(Math.floor(number)).padStart(6, "0");
  document.getElementById("auth_number").innerText = number;
};

const is_valid = () => {
  if (
    document.getElementById("phone1").value !== "" &&
    document.getElementById("phone2").value !== "" &&
    document.getElementById("phone3").value !== ""
  ) {
    document.getElementById("send_number").disabled = false;
  }
};
