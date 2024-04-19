// =====================================
// // 표준 내장 객체 - String 1
// String(문자) 표준 내장 객체(Built-in Object)
// .length - 문자의 길이(숫자)를 반환합니다.

const msg1 = 'Hello world!';
//            012345678901
console.log(msg1.length); // 12

const msg2 = 'The quick brown fox jumps over the lazy dog.';
//            01234567890123456789012345678901234567890123
console.log(msg2.length); // 44

const h1El = document.querySelector('h1');
h1El.textContent = msg2.length > 20 ? `${msg2.slice(0, 20)}...` : msg2;

// -------------------------------------
// String(문자) 표준 내장 객체(Built-in Object)
// .includes() - 문자에서 특정 문자가 포함되어 있는지 확인합니다.

const msg3 = 'Hello world!';
const msg4 = 'The quick brown fox jumps over the lazy dog.';

console.log(msg3.includes('!')); // true
console.log(msg4.includes('dog')); // true

// -------------------------------------
// String(문자) 표준 내장 객체(Built-in Object)
// .replace() - 문자에서 특정 문자를 다른 문자로 바꾼 새로운 문자를 변환합니다.

const msg5 = 'Hello world!';
const msg6 = 'The quick brown fox jumps over the lazy dog.';

console.log(msg5.replace('world', 'earth')); // Hello earth!
console.log(msg6.replace('dog', 'cat')); // The quick brown fox jumps over the lazy cat.

console.log(msg5.replace(' ', '')); // Helloearth!
console.log(msg6.replace(' ', '')); // Thequick brown fox jumps over the lazy cat. // 딱 한번만 수행

// -------------------------------------
// String(문자) 표준 내장 객체(Built-in Object)
// .replaceAll() - 문자에서 특정 문자를 다른 문자로 모두 바꾼 새로운 문자를 변환합니다.

const msg7 = 'Hello world!';
const msg8 = 'The quick brown fox jumps over the lazy dog.';

console.log(msg7.replace(' ', '')); // Helloearth!
console.log(msg8.replace(' ', '')); // Thequickbrownfoxjumpsoverthelazycat.

// -------------------------------------
// String(문자) 표준 내장 객체(Built-in Object)
// .slice() - 문자에서 일부를 추출해 새로운 문자를 변환합니다.

const msg9 = 'Hello world!';
//            012345678901
const msg10 = 'The quick brown fox jumps over the lazy dog.';
//            01234567890123456789012345678901234567890123

console.log(msg9.slice(0, 5)); // 'Hello'
console.log(msg9.slice(6, -1)); // 'world'
console.log(msg9.slice(6)); // 'world!'
console.log(msg10.slice(10, 19)); // 'brown fox'
console.log(msg10.slice(35, -1)); // 'lazy dog'

// -------------------------------------
// String(문자) 표준 내장 객체(Built-in Object)
// .split() - 문자를 구분자로 나누어 배열로 변환합니다.

const msg11 = 'Hello world!';
const msg12 = 'The quick brown fox jumps over the lazy dog.';

console.log(msg11.split(' ')); // [ 'Hello', 'world']
console.log(msg12.split(' ')); // [ 'The', 'quick', 'brown', 'jumps', 'over', 'the', 'lazy', 'dog.']

console.log(msg11.split('')); // [ 'H', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
console.log(msg11.split('').reverse().join('')); // '!dlrow olleH

// -------------------------------------
// String(문자) 표준 내장 객체(Built-in Object)
// .toLowerCase() - 문자를 영어 소문자로 바꾼 새로운 문자로 반환합니다.
// .toUpperCase() - 문자를 영어 대문자로 바꾼 새로운 문자로 반환합니다.

const msg13 = 'Hello world!';
const msg14 = 'The quick brown fox jumps over the lazy dog.';

console.log(msg13.toLowerCase());
console.log(msg14.toLowerCase());

console.log(msg13.toUpperCase());
console.log(msg14.toUpperCase());

// -------------------------------------
// String(문자) 표준 내장 객체(Built-in Object)
// .trim() - 문자에서 앞뒤 공백을 제거한 새로운 문자를 반환합니다.

const msg15 = '   Hello world!    ';

console.log(msg15.trim()); // 'Hello world!'

const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');

inputEl.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const value = inputEl.value.trim();
    if (value) {
      console.log(`//${value}//`);
    }
  }
});
buttonEl.addEventListener('click', () => {
  const value = inputEl.value.trim();
  if (value) {
    console.log(`//${value}//`);
  }
});

// =====================================
// // 표준 내장 객체 - Number
// Number(숫자) 표준 내장 객체(Built-in Object)
// .toFixed() - 숫자에서 지정된 자릿수까지 표현하는 새로운 문자를 반환합니다.

const num = 3.1415926535;

console.log(num.toFixed(2)); // '3.14' 문자데이터로 반환
console.log(Number(num.toFixed(2))); // 3.14 숫자데이터로 반환

// -------------------------------------
// Number(숫자) 표준 내장 객체(Built-in Object)
// .toLocaleString() - 숫자에서 현지 언어 형식으로 바끈 새로운 문자를 반환합니다.

const num1 = 1000;
const num2 = 1000000000;
const num3 = num1.toLocaleString();
const num4 = num2.toLocaleString();

console.log(num3); // 1,000
console.log(num4); // 1,000,000,000
console.log(Number(num3.replaceAll('', ''))); // 1000
console.log(Number(num4.replaceAll('', ''))); // 1000000000

// -------------------------------------
// Number(숫자) 표준 내장 객체(Built-in Object)
// .Number(), Number.parseInt(), Number.parseFloat()
// 데이터.메소드() vs 클래스.메소드()

// 더 광범위하게 해석, 유연함.
console.log('Number(데이터)'); // 데이터를 숫자로 변환합니다.
console.log(Number('123')); // 123
console.log(Number('123.456')); // 123.456
console.log(Number('acb456')); // NaN
console.log(Number('123abc')); // NaN
console.log(Number('')); // 0
console.log(Number('abc')); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number({})); // NaN
console.log(Number([])); // 0

// 숫자를 추출해 명확하고 예측 가능하게 동작, 진법 지정 가능, 정수만 처리.
console.log('Number.parseInt(문자, 진수)'); // 문자를 정수로 변환합니다.
console.log(Number.parseInt('123', 10)); // 123
console.log(Number.parseInt('123.456', 10)); // 123
console.log(Number.parseInt('acb123', 10)); // NaN
console.log(Number.parseInt('123abc', 10)); // 123 숫자로 시작
console.log(Number.parseInt('', 10)); // NaN
console.log(Number.parseInt('abc', 10)); // NaN
console.log(Number.parseInt(true, 10)); // NaN
console.log(Number.parseInt(false, 10)); // NaN

// parseInt 정점에 더해, 부동소수점 실수까지 처리
console.log('Number.parseFloat(문자)'); // 문자를 부동소수점 실수로 변환합니다.
console.log(Number.parseFloat('123')); // 123
console.log(Number.parseFloat('123.456')); // 123.456
console.log(Number.parseFloat('123abc')); // NaN
console.log(Number.parseFloat('abc123')); // 123

// -------------------------------------
// Number(숫자) 표준 내장 객체(Built-in Object)
// Number.isInteger() - 데이터가 정수(숫자 데이터)인지 확인합니다.

console.lof(Number.isInteger(123)); // true
console.lof(Number.isInteger(3.14)); // false
console.lof(Number.isInteger(-82)); // true
console.lof(Number.isInteger(0)); // true
console.lof(Number.isInteger('123')); // false
console.lof(Number.isInteger('abc')); // false

// -------------------------------------
// Number(숫자) 표준 내장 객체(Built-in Object)
// Number.isNaN() - 데이터가 `NaN`인지 확인합니다.

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(123)); // false
console.log(Number.isNaN(Infinity)); // false
console.log(Number.isNaN('abc')); // false

// =====================================
// // 표준 내장 객체 - Math
// Math(수학) 표준 내장 객체(Built-in Object)
// Math.abs() - 주어진 숫자의 절댓값을 반환합니다.

console.log(Math.abs(7)); // 7
console.log(Math.abs(-7)); // 7
console.log(Math.abs(3.14)); // 3.14
console.log(Math.abs(-3.14)); // 3.14

// -------------------------------------
// Math(수학) 표준 내장 객체(Built-in Object)
// Math.ceil() - 주어진 숫자을 올림해 정수를 반환합니다.
// Math.floor() - 주어진 숫자을 내림해 정수를 반환합니다.
// Math.round() - 주어진 숫자을 반올림해 정수를 반환합니다.

console.log(Math.ceil(3.1415926535)); // 4
console.log(Math.ceil(3.1415926535 * 100) / 100); // 3.15

console.log(Math.floor(3.1415926535)); // 3
console.log(Math.floor(3.1415926535 * 100) / 100); // 3.14

console.log(Math.round(3.1415926535)); // 3
console.log(Math.round(3.1415926535 * 100) / 100); // 4

console.log(Math.round(3.14 * 10) / 10); // 3.1
console.log(Math.round(3.768 * 10) / 10); // 3.8

// -------------------------------------
// Math(수학) 표준 내장 객체(Built-in Object)
// Math.max() - 주어진 숫자 중 가장 큰 숫자를 반환합니다.
// Math.min() - 주어진 숫자 중 가장 작은 숫자를 반환합니다.

console.log(Math.max(10, 128, 12, 49, 7)); // 128
console.log(Math.min(10, 128, 12, 49, 7)); // 7

const numbers = [10, 128, 12, 49, 7];
console.log(Math.max(...number)); // 128
console.log(Math.min(...number)); // 7

// -------------------------------------
// Math(수학) 표준 내장 객체(Built-in Object)
// Math.ramdom() - `0` 이상 `1` 미만의 난수(무작위 수)를 반환합니다.

console.log(Math.ramdom());
console.log(Math.ramdom());

// 원하는 범위의 무작위 정수를 얻는 함수
function ramdom(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(ramdom()); // 0~9
console.log(ramdom(0, 100)); // 0~99
console.log(ramdom(101, 200)); // 100~199

// =====================================
// // 표준 내장 객체 - Date
// Date(날짜) 표준 내장 객체(Built-in Object)
// `new Date()`를 통해 반환된 인스턴스를 '타임스탬프'(Timestemp)라고 합니다.

let date = new Date(); // 자바스크립트의 new 키워드와 함께 호출하는 함수 (클래스)를 '생성자 함수'라고 합니다.
console.log(date);

// 2024년 12월 16일 17시 23분 31호
date = new Date(2024, 11, 16, 17, 23, 31);
console.log(date);

// 타임스탬프에서 각 정보를 얻을 수 있습니다.
console.log(date.getFullYear());
console.log(date.getMonth() + 1); // 0~11 +1 : 1~12월
console.log(date.getDate()); // 0 부터 세지 않는다. 1일부터 시작.
console.log(getDayko(date.getDay())); // 0~6 : 일~토
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

const h1El = document.querySelector('h1');
h1El.textContent = `$(date.getFullYear())년`;

function getDayko(day) {
  switch (day) {
    case 0:
      return '일요일';
    case 1:
      return '월요일';
    case 2:
      return '화요일';
    case 3:
      return '수요일';
    case 4:
      return '목요일';
    case 5:
      return '금요일';
    case 6:
      return '토요일';
  }
}

// -------------------------------------
// Date(날짜) 표준 내장 객체(Built-in Object)
// .getTime() - 유닉스 타임(UNIX Time)으로부터 경과한 시간(ms)을 반환합니다.
// .Date.now() - 현재 시간을 유닉스 타임으로 변환합니다.
// .유닉스 타임이란, 1970.01.01 00:00:00 시간을 의미합니다.

const date1 = new Date(2000, 12, 16);
const date2 = Date.now();

console.log(date1);
console.log(date1.getTime());
console.log(date2);

setTimeout(() => {
  console.log(Date.now(), date2);
  console.log(Date.now() - date2);
}, 1000);
// setTimeout이나 setInterval 함수에서 약간의 시간 오차가 생기는 이유는, '콜 스택과 이벤트 루프'개념을 이해하면 알 수 있습니다.

// -------------------------------------
// Date(날짜) 표준 내장 객체(Built-in Object)
// 날짜 인스턴스의 협정 세계시(UTC)를 'ISO 8601' 포맷으로 변환합니다.
// 'ISO 8601'는 날짜와 시간을 표현하는 국제 표준 규격입니다.

console.log(new Date());
console.log(new Date().toISOString());

// =====================================
// // 표준 내장 객체 - Array 1 - length, at, concat, every
// Array(배열) 표준 내장 객체(Built-in Object)
// .length - 배열의 길이(숫자)를 반환합니다.

const fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits.length);

// .at - 배열의 길이(숫자)를 반환합니다.

console.log(fruits[1]);
console.log(fruits.at[1]);

console.log(fruits[fruits.length - 1]);
console.log(fruits.at[-1]);

// .concat - 배열의 길이(숫자)를 반환합니다.
const fruits1 = ['Apple', 'Banana', 'Cherry'];
const fruits2 = ['Cherry', 'Durian'];
const fruits3 = fruits1.concat(fruits2);
const fruits4 = [...fruits1, ...fruits2]; // 배열데이터

console.log(fruits1); // ['Apple', 'Banana', 'Cherry']
console.log(fruits2); // ['Cherry', 'Durian']
console.log(fruits3); // ['Apple', 'Banana', 'Cherry', 'Cherry', 'Durian']
console.log(fruits4); // ['Apple', 'Banana', 'Cherry', 'Cherry', 'Durian']

// .every - 배열의 길이(숫자)를 반환합니다.
// 만약 테스트가 하나라도 실패하면, 이후 테스트는 진행하지 않고 `false`를 반환합니다.

const numbers1 = [17, 20, 199, 5, 48];
const isValid = numbers.every((item) => item < 200);
console.log(isValid); // false

const users = [
  { name: 'Neo', age: 12, email: 'neo@heropy.dev' },
  { name: 'Even', age: 47, email: 'evan@heropy.dev' },
  { name: 'Lewis', age: 24 },
];
console.log(users.every((user) => user.email)); // false
console.log(users.every((user) => user.age)); // true

// =====================================
// // 표준 내장 객체 - Array 2 - filter, find
// Array(배열) 표준 내장 객체(Built-in Object)
// .filter - 배열에서 콜백 테스트를 통과하는 모든 요소로 새로운 배열을 만들어 반환합니다.
// 만약 모든 요소가 텟그트를 통과하지 못하면 빈 배열을 반환합니다.

const numbers2 = [17, 20, 199, 5, 48];
const filteredNumbers = numbers2.filter((number) => number < 30);
console.log(filteredNumbers);

const users1 = [
  { name: 'Neo', age: 12, email: 'neo@heropy.dev' },
  { name: 'Even', age: 47, email: 'evan@heropy.dev' },
  { name: 'Lewis', age: 24 },
];

const youngUsers = users1.filter((user) => user.age < 30);
console.log(youngUsers);
const usersWithEmail = users1.filter((user) => user.email);
console.log(usersWithEmail);
const userWithPhone = users1.filter((user) => user.phone);
console.log(userWithPhone);

// .find() - 배열에서 콜백 테스트를 처음으로 통과하는 요소를 반환합니다.
// 만약 테스트가 통과하면, 이후 테스트는 진행하지 않습니다.
// 만약 모든 테스트가 실패하면, `undefined`를 반환합니다.

// const numbers2 = [17, 20, 199, 5, 48];
const foundNumber = numbers.find((number) => number < 30);
console.log(foundNumber);

// const users1 = [
//   { name: 'Neo', age: 12, email: 'neo@heropy.dev' },
//   { name: 'Even', age: 47, email: 'evan@heropy.dev' },
//   { name: 'Lewis', age: 24 },
// ];

const foundUser = users.find((user) => !user.email);
console.log(foundUser);

// =====================================
// // 표준 내장 객체 - Array 3 - findIndex, forEach

// =====================================
// // 표준 내장 객체 - Array 4 - map, push, reduce

// =====================================
// // 표준 내장 객체 - Array 5 - reverse, slice, some, sort

// =====================================
// // 표준 내장 객체 - Array 6 - splice, unshift, isArray, from
