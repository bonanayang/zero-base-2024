// 불변성(Immutability)은 생성된 데이터가 메모리에서 변경되지 않는 것을,
// 가변성(Mutability)은 생성된 메모리에서 변경될 수 있음을 의미합니다.
// 원시형(문자, 숫자, 불린, null, underfind)은 불면성,
// 참조형(배열, 객체, 함수)은 가변성을 가지고 있습니다.

const user = {
  name: 'Neo',
  age: 85,
  emails: ['neo@heropy.dev', 'neo@gmail.com', 'neo@naver.com'],
};
console.log(user);

let { name, age, emails } = user;
name = 'Evan';
age = 123;
email = [...emails]; // 복사!
emails.splice(1, 2);

console.log(name, age, emails);
console.log(user);

// {
//   name: 'Neo',
//   age: 85,
//   emails: [ 'neo@heropy.dev', 'neo@gmail.com', 'neo@naver.com' ]
// }
// Evan 123 [ 'neo@heropy.dev' ]
// { name: 'Neo', age: 85, emails: [ 'neo@heropy.dev' ] }
