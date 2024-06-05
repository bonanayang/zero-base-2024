// 클로저(Closure)는 함수가 선엄될 때의 렉시컬 스코프를 기억하고 있다가,
// 함수가 호출될 때 그 스코프에 접근할 수 있는 개념(특성)을 말합니다.

let count1 = 0;
function c1() {
  return (count1 += 1);
}
console.log(c1()); // 1
console.log(c1()); // 2
console.log(c1()); // 3

let count2 = 77;
function c2() {
  return (count2 += 1);
}
console.log(c2()); // 78
console.log(c2()); // 79
console.log(c2()); // 80

function createCount(count) {
  return function () {
    return (count += 1);
  };
}
const c3 = createCount(0);
console.log(c3()); // 1
console.log(c3()); // 2
console.log(c3()); // 3
const c4 = createCount(77);
console.log(c4()); // 78
console.log(c4()); // 79
console.log(c4()); // 80
console.log(c3 === c4); // false
console.log(c3()); // 4
console.log(c4()); // 81
