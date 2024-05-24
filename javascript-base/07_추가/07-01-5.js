// 구조 분해 할당(Destructuring assignment)
// - 배열이나 객체의 구조에 맞게 바로 개별 변수에 값을 할당하는 방법으로,
// 필요한 값만 추출하여 변수에 할당할 수 있습니다.

// 나머지 할당
const numbers = [1, 2, 3];
// const [a, ...rest] = numbers;
const [a, ...r] = numbers;

// console.log(a, rest); // 1 [ 2, 3 ]
console.log(a, r); // 1 [ 2, 3 ]
