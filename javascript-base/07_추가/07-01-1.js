// 구조 분해 할당(Destructuring assignment)
// - 배열이나 객체의 구조에 맞게 바로 개별 변수에 값을 할당하는 방법으로,
// 필요한 값만 추출하여 변수에 할당할 수 있습니다.

const numbers = [1, 2, 3];
// const a = numbers[0];
// const b = numbers[1];
// const c = numbers[2];
const [a, b, c] = numbers;

console.log(a, b, c); // 1 2 3
