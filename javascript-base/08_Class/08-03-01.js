// 클래스 - 정적 메소드(Static method)
// - 정적 메소드는 주로 클래스의 유틸리티(보조) 함수를 만들 때 사용합니다.
// - 인스턴스와는 연결되지 않으며, 클래스 자체에서 호출해야 합니다.

const fruits = new Array('Apple', 'Banana', 'Cherry');
// const fruits = ['Apple', 'Banana', 'Cherry']; // 리터럴 방식

// fruits.includes('Apple');
// fruits.filter((item) => item);
// fruits.push('Orange');
Array.prototype.abc = function () {
  console.log(this);
  return this.map((item) => item.slice(0, 1).toLowerCase());
};

const newFruits = fruits.abc();
console.log(newFruits);
console.log(Array.isArray(fruits));
// fruits.isArray()
console.log(Array.isArray(newFruits));

const user = { name: 'Neo' };
console.log(Array.isArray(user));
// user.isArray()

console.log(['Orange', 'Mango'].abc()); // [ 'o', 'm' ]
