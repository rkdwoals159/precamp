123 + 123;
// 246
123 + 123 + "123";
// '246123'
"코드" + "캠프";
// '코드캠프'
123 === "123";
// false
123 == "123";
// true
0;
// 0
0 + 1;
// 1
0 + "1";
// '01'
0 + int("1");
// VM497:1 Uncaught ReferenceError: int is not defined
// at <anonymous>:1:1
// (anonymous) @ VM497:1
0 + parseInt("1");
// 1
123 === 123 && 123 === 123;
// true
if (2 + 4 === 6) {
  console.log("정답입니다");
}
// VM1211:2 정답입니다
// undefined
else {
  console.log("틀렸씁니다");
}
// VM1321:1 Uncaught SyntaxError: Unexpected token 'else'
if (2 + 4 === "6") {
  console.log("정답입니다");
} else {
  console.log("틀렸습니다.");
}
// VM1461:4 틀렸습니다.
// undefined
if (true) {
  console.log("정답입니다");
} else {
  console.log("틀렸습니다.");
}
// VM1600:2 정답입니다
// undefined
if (0) {
  console.log("정답입니다");
} else {
  console.log("틀렸습니다.");
}
// VM1656:4 틀렸습니다.
// undefined
if (1) {
  console.log("정답입니다");
} else {
  console.log("틀렸습니다.");
}
// VM1668:2 정답입니다
// undefined
const profile = {
  name: "철수",
  age: 12,
  school: "다람쥐초등학교",
};
// undefined
if (profile.age >= 20) {
  console.log("성인입니다.");
} else if (profile.age >= 8 && profile.age <= 19) {
  console.log("학생입니다.");
} else {
  console.log("어린이입니다.");
}
// VM2501:5 학생입니다.
// undefined
