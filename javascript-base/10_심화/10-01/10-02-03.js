// this 키워드는 일반 함수와 화살표 함수에 따라 다르게 정의됩니다.
// 일반 함수는 호출 위피에서 this가 정의됩니다.
// 화살표 함수는 선언 위치(렉시컬 스코프)에서 this가 정의됩니다.

Array.prototype.abc = function () {
  return this.map(function (item) {
    return item.toUpperCase();
  });
};

const fruits = ['apple', 'banana', 'cherry'];
const flowers = ['rose', 'tulip', 'lily'];
console.log(fruits.abc());
console.log(flowers.abc());

// [ 'APPLE', 'BANANA', 'CHERRY' ]
// [ 'ROSE', 'TULIP', 'LILY' ]
