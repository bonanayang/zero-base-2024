// 객체 리터럴
const neo = {
  name: 'Neo',
  age: 22,
  getBirthYear() {
    const year = new Date().getFullYear();
    return year - this.age;
  },
};
const evan = {
  name: 'Evan',
  age: 7,
};
const lewis = {
  name: 'Lewis',
  age: 72,
};

console.log(neo.getBirthYear()); // 2002
// console.log(evan.getBirthYear()); // TypeError: evan.getBirthYear is not a function
console.log(neo.getBirthYear.call(evan)); // 2017
console.log(neo.getBirthYear.call(lewis)); // 1952

// console.log(neo.getBirthYear === evan.getBirthYear); // false
