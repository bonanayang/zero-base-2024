// 구조 분해 할당(Destructuring assignment)
// - 배열이나 객체의 구조에 맞게 바로 개별 변수에 값을 할당하는 방법으로,
// 필요한 값만 추출하여 변수에 할당할 수 있습니다.

const user = {
  name: 'Neo',
  age: 22,
  isValid: true,
};
// const name = user.name;
// const age = user.age;
// const isValid = user.isValid;
const { name, age, isValid } = user;

console.log(name);
console.log(age);
console.log(isValid);
// Neo
// 22
// true
