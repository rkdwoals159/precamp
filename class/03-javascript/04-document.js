function change() {
  //input 태그에 담긴 값을 가져와서 변수에 할당
  // 변수에 담긴 내용을 greeting에 재할당
  document.getElementById("greeting").innerText =
    document.getElementById("text").value;
  document.getElementById("text").value = "";
}
