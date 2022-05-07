maskingMAil = [];
// []
maskingMAil.push("c");
// 1
maskingMAil.push("o");
// 2
maskingMAil.push("d");
// 3
maskingMAil.push("e");
// 4
maskingMAil.push("*");
// 5
maskingMAil.push("*");
// 6
maskingMAil.push("*");
// 7
maskingMAil.push("*");
// 8
maskingMAil.join("");
// 'code****'
userMail = maskingMAil.join("");
// 'code****'
company = "gmail.com";
// 'gmail.com'
email = userMail + "@" + company;
// 'code****@gmail.com'
let student = {
  name: "철수",
  age: 13,
  camp: "코드캠프",
};
// undefined
student;
// {name: '철수', age: 13, camp: '코드캠프'}
student.name;
// '철수'
student.age;
// 13
student.camp;
// '코드캠프'
student.school;
// undefined
let classmates = [
  { name: "철수", age: 13, school: "다람쥐초등학교" },
  { name: "영희", age: 8, school: "공룡초등학교" },
  { name: "훈이", age: 11, school: "거북이초등학교" },
];
// undefined
classmates;
// (3) [{…}, {…}, {…}]0: {name: '철수', age: 13, school: '다람쥐초등학교'}1: {name: '영희', age: 8, school: '공룡초등학교'}2: {name: '훈이', age: 11, school: '거북이초등학교'}age: 11name: "훈이"school: "거북이초등학교"[[Prototype]]: Objectlength: 3[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()length: 1name: "flatMap"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]forEach: ƒ forEach()length: 1name: "forEach"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()length: 0name: "shift"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]slice: ƒ slice()length: 2name: "slice"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}[[Prototype]]: Object
classmates.length;
// 3
classmates[0].age;
// 13
classmates[2].school;
// '거북이초등학교'
fruits[0].number + " " + fruits[0].title;
// '1 레드향'
fruits[1].number + " " + fruits[1].title;
// '2 샤인머스켓'
fruits[2].number + " " + fruits[2].title;
// '3 산청딸기'
fruits[3].number + " " + fruits[3].title;
// '4 한라봉'
fruits[4].number + " " + fruits[4].title;
// '5 사과'
fruits[5].number + " " + fruits[5].title;
// '6 애플망고'
fruits[6].number + " " + fruits[6].title;
// '7 딸기'
fruits[7].number + " " + fruits[7].title;
// '8 천혜향'
fruits[8].number + " " + fruits[8].title;
// '9 과일선물세트'
fruits[9].number + " " + fruits[9].title;
// '10 귤'
