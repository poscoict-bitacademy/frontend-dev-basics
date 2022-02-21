/**
 * 배열
 */

// 배열 생성1: 내장객체(생성자 함수)를 사용
console.log("== 배열 생성1: 내장객체(생성자 함수)를 사용 ===");

var a1 = new Array();
console.log(typeof(a1), a1 instanceof Array, a1.length);

// 배열을 생성할 때 크기 지정은 별 의미가 없다.
// 동적은 배열은 늘어난다.
var a2 = new Array(10);
a2[0] = 0;
a2[5] = 5;
a2[10] = 10;
a2[20] = 20;
console.log(a2[0], a2[1], a2.length); // 배열 요소에 값을 지정않하면 undefined

// 초기값을 지정할 수 있다.
var a3 = new Array(0, 2, 4, 6, 8);
console.log(a3.length);

// 배열 생성2: 리터럴 사용
console.log("== 배열 생성2: 리터럴 사용 ===========");
var a4 = [10, "JavaScript", true, function(){
    console.log("Hello World");
}, {
    name: '마이콜',
    age: 30
}];

console.log(typeof(a4), a4 instanceof Array, a4.length);
for(var i = 0; i < a4.length; i++){
    console.log(a4[i]);
}

a4[3]();

// Array VS Object
console.log("== Array VS object ==== ");

a5 = [];
a5[0] = 0;
a5["1"] = 1;
a5.name = "둘리";
a5["age"] = 10;

console.log(a5["0"], a5[1], a5.length, a5["name"], a5.age);
for(prop in a5){
    console.log(prop, a5[prop]);
}

o5 = {};
o5[0] = 0;
o5["1"] = 1;
o5.name = "둘리";
o5["age"] = 10;
o5.length = 2;
console.log(o5["0"], o5[1], o5.length, o5["name"], o5.age);
for(prop in o5){
    console.log(prop, o5[prop]);
}