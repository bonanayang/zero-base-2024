// 구조 분해 할당(Destructuring assignment)
// - 배열이나 객체의 구조에 맞게 바로 개별 변수에 값을 할당하는 방법으로,
// 필요한 값만 추출하여 변수에 할당할 수 있습니다.
// 유표범위(Scope)란, 선언하는 변수가 유효하게 사용될 수 있는 범위를 말하며, 기본적으로 블록 레벨(중괄호 영역)로 유효범위를 가집니다.

// 선언과 분리
const numbers = [1, 2, 3];
let a;
let b;
let c;
if (numbers.length) {
  [a, b, c] = numbers;
}
console.log(a, b, c);
// 1 2 3
