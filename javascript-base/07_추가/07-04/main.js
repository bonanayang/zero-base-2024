// 모듈(Module) - import & export
import { add, sub } from './core/calulator.js';
import { getUserBirthYear } from './core/user.js';
import { fruits, addFruit } from './core/fruits.js';

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
