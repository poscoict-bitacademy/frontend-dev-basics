/**
 * string primitive type과 String 객체 메소드(String.prototype.*)
 */

// 배열처럼 접근이 가능하다.
var str1 = 'Hello World';
for(var i = 0; i < str1.length; i++) {
    console.log(str1[i]);
}

// 문자열 합치기
var str2 = 'Hello';
var str3 = 'World';
var str4 = str2 + ' ' + str3;
console.log(str4);
