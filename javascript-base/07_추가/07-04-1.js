// 모듈(Module) - import & export

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function getUserBirthYear(user) {
  const year = new Date().getFullYear();
  return year - user.age;
}
const fruits = ['Apple', 'Banana', 'Cherry'];
const addFruit = (fruit) => {
  fruits.push(fruit);
};

console.log(add(2, 7)); // 9
console.log(sub(2, 7)); // -5

const neo = {
  name: 'Neo',
  age: 22,
};
const lewis = {
  name: 'Lewis',
  age: 7,
};
console.log(getUserBirthYear(neo)); // 2002
console.log(getUserBirthYear(lewis)); // 2017

addFruit('Orange');
addFruit('Mango');
console.log(fruits); // [ 'Apple', 'Banana', 'Cherry', 'Orange', 'Mango' ]
