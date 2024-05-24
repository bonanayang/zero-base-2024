// 선택적 체이닝(Optional Chaining)
// ?. - 대괄호 혹은 점 표기법의 대상이 null 혹은 undefined인 경우, 에러 대신 undefined를 반환합니다.

// console.log(null.abc); // TypeError: Cannot read properties of null (reading 'abc')
// console.log(undefined.abc); // TypeError: Cannot read properties of undefined
console.log(null?.abc); // undefined
console.log(undefined?.abc); // undefined

const el = document.querySelector('h1');
console.log(el?.textContent); // undefined

// const numbers = [1, 2, 3];
const numbers = null;
console.log(numbers?.[0]); // undefined

// const user = {
//   name: 'Neo',
//   age: 22,
// };
const user = null;
console.log(user?.name);
