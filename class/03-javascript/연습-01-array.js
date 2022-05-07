const classmates = ["은정", "서형", "재민", "예봄"];
// undefined
classmates;
// (4) ['은정', '서형', '재민', '예봄']
classmates[0];
// '은정'
classmates[1];
// '서형'
classmates[3];
// '예봄'
classmates[4];
// undefined
console.log(classmates[4]);
// VM1692:1 undefined
// undefined
classmates.includes("다솜");
// false
classmates.includes("재민");
// true
classmates.push("다솜");
// 5
classmates.length;
// 5
classmates.pop;
// ƒ pop() { [native code] }
classmates.pop();
// '다솜'
classmates.length;
// 4
const developer = ["공부", "끈기", "열정", "향상심", "흥미"];
// undefined
developer[3];
// '향상심'
const dream = ["커리어점프", "성공", "할수있다"];
// undefined
developer.concat(dream);
// (8) ['공부', '끈기', '열정', '향상심', '흥미', '커리어점프', '성공', '할수있다']
let email = "codecamp@gmail.com";
// undefined
email.includes("@");
// true
email.indexOf("@");
// 8
email.split("@");
// (2) ['codecamp', 'gmail.com']
let userMail = email.split("@")[0];
// undefined
let company = email.split("@")[1];
// undefined
