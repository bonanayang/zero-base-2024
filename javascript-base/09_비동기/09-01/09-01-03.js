// 비동기(Asynchronous) 코드는 작성된 순서대로 실행되지만, 특정 작업이 끝나기 전에 다음 작업이 시작될 수 있습니다.

console.log(1);
const h1El = document.querySelector('h1');
h1El.addEventListener('click', () => {
  console.log('클릭!!');
});
console.log(2);
