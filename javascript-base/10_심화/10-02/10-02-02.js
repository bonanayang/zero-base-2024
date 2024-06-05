// this 키워드는 일반 함수와 화살표 함수에 따라 다르게 정의됩니다.
// 일반 함수는 호출 위피에서 this가 정의됩니다.
// 화살표 함수는 선언 위치(렉시컬 스코프)에서 this가 정의됩니다.

function createTimer(duration) {
  return {
    message: 'Timer!!',
    timeout() {
      return setTimeout(() => {
        console.log(this.message);
      }, duration);
    },
  };
}

const t1 = createTimer(1000);
t1.timeout();

const t2 = createTimer(2000);
t2.timeout();

// Timer!!
// Timer!!

console.log(t1 === t2);
