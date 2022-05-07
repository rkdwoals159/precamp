function hello() {
  alert("안녕하세요");
}
// undefined
hello();
// undefined
hello;
// ƒ hello() {
// alert("안녕하세요")
// }
hello();
// undefined
function hello(name) {
  alert(name + "님 안녕하세요");
}
// undefined
hello("강재민");
// undefined
function hello(name) {
  console.log(name + "님 안녕하세요");
}
// undefined
hello("강재민");
// VM1587:2 강재민님 안녕하세요
// undefined
// function hello2(name) {
// returnname + "님 안녕하세요")
// }
// VM1715:2 Uncaught SyntaxError: Unexpected token ')'
function hello2(name) {
  return name + "님 안녕하세요";
}
// undefined
hello("강재민");
// VM1587:2 강재민님 안녕하세요
// undefined
