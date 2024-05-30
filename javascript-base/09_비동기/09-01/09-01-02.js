// 비동기(Asynchronous) 코드는 작성된 순서대로 실행되지만, 특정 작업이 끝나기 전에 다음 작업이 시작될 수 있습니다.

console.log(1);
console.log(2);
console.log(3);
console.time('Loop!');
setTimeout(() => {
  for (let i = 0; i < 1000000000; i++) {} // 10억!
  console.timeEnd('Loop!');
  console.log(5);
}, 0);
console.log(4);
// 1
// 2
// 3
// 4
// Loop!: 382.982ms
// 5
