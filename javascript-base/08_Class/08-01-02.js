// 프로토타입
function User(name, age) {
  this.name = name;
  this.age = age;
}
User.prototype.getBirthYear = function () {
  const year = new Date().getFullYear();
  return year - this.age;
};

const neo = new User('Neo', 22);
const evan = new User('Evan', 7);
const lewis = new User('Lewis', 72);

console.log(neo); // User { name: 'Neo', age: 22 }
console.log(evan); // User { name: 'Evan', age: 7 }
console.log(lewis); // User { name: 'Lewis', age: 72 }
console.log(neo.getBirthYear()); // 2002
console.log(evan.getBirthYear()); // 2017

console.log(neo.getBirthYear === evan.getBirthYear); // true
