// 콜 스택과 이벤트 루프
// 자바스크립트는 저수준의 오래 걸릴 수 있는 일(Timer, Network 등)은 Web API에게 위임하고,
// 고수준의 작업은 자바스크립트 엔진(싱글 스레드)에서 처리하는 방식으로 빠른 속도와 높은 확장성을 유지합니다.
// - FIFO(First In First Out): 선입선출, 먼저 들어온 데이터가 먼저 나감
// -LIFO(Last In First Out): 후입선출, 마지막에 들어온 데이터가 먼저 나감

function a() {
  console.log('A');
  function b() {
    setTimeout(() => {
      console.log('B1');
      console.log('B2');
    }, 0);
  }
  b();
}
function c() {
  console.log('c');
}
function first() {
  a();
  c();
}
function second() {
  c();
}
first();
second();

// A
// c
// c
// B1
// B2
