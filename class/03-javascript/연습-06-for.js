if(2+4 ===6) {
    console.log("정답입니다")
}
// VM1211:2 정답입니다
// undefined
else {console.log("틀렸씁니다")}
// VM1321:1 Uncaught SyntaxError: Unexpected token 'else'
if(2+4 ==='6') {
    console.log("정답입니다")
}
else{console.log("틀렸습니다.")}
// VM1461:4 틀렸습니다.
// undefined
if(true) {
    console.log("정답입니다")
}
else{console.log("틀렸습니다.")}
// VM1600:2 정답입니다
// undefined
if(0) {
    console.log("정답입니다")
}
else{console.log("틀렸습니다.")}
// VM1656:4 틀렸습니다.
// undefined
if(1) {
    console.log("정답입니다")
}
else{console.log("틀렸습니다.")}
// VM1668:2 정답입니다
// undefined
const profile = {
    name: "철수",
    age : 12,
    school : "다람쥐초등학교"
}
// undefined
if(profile.age >=20) {
    console.log("성인입니다.")
}
else if (profile.age>=8 && profile.age<=19) {
    console.log("학생입니다.")
}
else {
    console.log("어린이입니다.")
}
// VM2501:5 학생입니다.
// undefined
let children = ["철수", "영희","훈이"]
// undefined
for(let i =0;i<children.length;i++){
    console.log(children[i])
}
// VM4246:2 철수
// VM4246:2 영희
// VM4246:2 훈이
// undefined
let persons = [
  {name: '철수', age:18},
  {name: '영희', age:22},
  {name: '도우너', age:5},
  {name: '말포이', age:14},
  {name: '도비', age:3},
]
// undefined
for(let i=0;i<persons.length;i++){
    if(persons[i].age >=20) {
    console.log(person[i].name+"님의 나이는" + "성인입니다.")
    }
    else if (persons[i].age>=8 && persons[i].age<=19) {
        console.log(person[i].name+"님의 나이는" + "학생입니다.")
    }
    else {
        console.log(person[i].name+"님의 나이는" + "어린이입니다.")
    }
}
// VM5192:6 Uncaught TypeError: Cannot read properties of undefined (reading 'name')
    // at <anonymous>:6:31
// (anonymous) @ VM5192:6
for(let i=0;i<persons.length;i++){
    if(persons[i].age >=20) {
    console.log(persons[i].name+"님의 나이는" + "성인입니다.")
    }
    else if (persons[i].age>=8 && persons[i].age<=19) {
        console.log(persons[i].name+"님의 나이는" + "학생입니다.")
    }
    else {
        console.log(persons[i].name+"님의 나이는" + "어린이입니다.")
    }
}
// VM5290:6 철수님의 나이는학생입니다.
// VM5290:3 영희님의 나이는성인입니다.
// VM5290:9 도우너님의 나이는어린이입니다.
// VM5290:6 말포이님의 나이는/학생입니다.
// VM5290:9 도비님의 나이는어린이입니다.
// undefined
for(let i=0;i<persons.length;i++){
    if(persons[i].age >=20) {
    console.log(persons[i].name+"님의 나이는" + " 성인입니다.")
    }
    else if (persons[i].age>=8 && persons[i].age<=19) {
        console.log(persons[i].name+"님의 나이는" + " 학생입니다.")
    }
    else {
        console.log(persons[i].name+"님의 나이는" + " 어린이입니다.")
    }
}
// VM5320:6 철수님의 나이는 학생입니다.
// VM5320:3 영희님의 나이는 성인입니다.
// VM5320:9 도우너님의 나이는 어린이입니다.
// VM5320:6 말포이님의 나이는 학생입니다.
// VM5320:9 도비님의 나이는 어린이입니다.
// undefined