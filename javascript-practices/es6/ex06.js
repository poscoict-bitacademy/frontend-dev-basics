/**
 * 구조 분해(Destructing)
 */

// ex1 - basic
const user = {
    firstName: '둘',
    lastName: '리',
    email: 'kickscar@gmail.com'
};

// let firstName = user.firstName;
// let lastName = user.lastName;
let {firstName, lastName} = user;

console.log(firstName, lastName);

// ex2 - Default Value
const goods = {
    name: 'TV',
    price: 10000,
    stockCount: 100
};

let {name, price, countStock=0, stockCount=0} = goods;
console.log(name, price, countStock, stockCount);

// ex3 - 구조분해해야 할 객체의 속성과 변수 이름이 다를 때
const person = {
    name: '안대혁',
    country: 'korea'
};

const {name: fullName, country: place} = person
console.log(fullName, place);

// ex4 - 내부 객체(Nested Object)의 구조 분해
const student = {
    name: '둘리',
    age: 10,
    score: {
        math: 90,
        korean: 70,
        science: 100
    }
}

const {name: studentName, score:{math=0, korean=0, science=0, music=0}} = student
console.log(`${studentName}의 성적
수학: ${math}
국어:${korean}
과학:${science}
음악:${music}
`);


// ex05 - 함수의 파라미터
const averageScore = function({name: studentName, score:{math=0, korean=0, science=0, music=0}}) {
    console.log(`${studentName}의 평균은 ${(math + korean + science + music) / 4}`);   
}

averageScore(student);

// ex06 - 배열...
