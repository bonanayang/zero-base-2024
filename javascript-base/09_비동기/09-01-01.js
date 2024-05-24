// 동기(Synchronous) 코드는 작성된 순서대로 실행되며, 하나의 작업이 끝나기 전에는 다음 작업이 시작되지 않습니다.

console.log(1);
console.log(2);
alert('확인!');
console.log(3);
console.time('Loop!');
for (let i = 0; i < 1000000000; i++) {} // 10억!
console.log.timeEnd('Loop!');
console.log(4);

// 1
// 2
// alert('확인!'); 확인 버튼을 눌러야 다음으로 실행
