// 비동기(Asynchronous) 코드는 작성된 순서대로 실행되지만, 특정 작업이 끝나기 전에 다음 작업이 시작될 수 있습니다.

console.log(1);
fetch('https://api.heropy.dev/v0/users')
  .then((res) => res.json())
  .then((data) => console.log(data));
console.log(2);
// 1
// 2
// {
//   total: 7,
//   users: [
//     {
//       id: 'ywTTX',
//       name: 'Neo',
//       age: 85,
//       isValid: true,
//       emails: [Array],
//       photo: [Object]
//     },
//     {
//       id: 'bhxd4',
//       name: 'Trinity',
//       age: 22,
//       isValid: false,
//       emails: [Array],
//       photo: [Object]
//     },
//     {
//       id: 'MO3Tq',
//       name: 'Emily',
//       age: 45,
//       isValid: false,
//       emails: [Array]
//     },
//     {
//       id: 'bBKR7',
//       name: 'John',
//       age: 33,
//       isValid: true,
//       emails: [Array],
//       photo: [Object]
//     },
//     {
//       id: 'd9kGc',
//       name: 'Smith',
//       age: 55,
//       isValid: false,
//       emails: [Array],
//       photo: [Object]
//     },
//     {
//       id: 'J4OTM',
//       name: 'Evan',
//       age: 12,
//       isValid: false,
//       emails: [Array]
//     },
//     {
//       id: 'EkGwR',
//       name: 'Lewis',
//       age: 63,
//       isValid: true,
//       emails: [Array]
//     }
//   ]
// }
