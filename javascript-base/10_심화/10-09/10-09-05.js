// 가비지 컬렉션(Garbage Collection)이란,
// 더 이상 사용되지 않는 메모리를 해제하는 프로세스 자바스크립트 엔진이 자동으로 처리됩니다.

// 메모리 누수(Memory Leak)란,
// 더 이상 필요치 않은 데이터가 해제되지 못해 메모리를 계속 차지되는 것을 말합니다.

// 불필요한 클로저를 제거하세요!
const getFn = (x) => {
  return (name) => {
    x += 1;
    console.log(x);
    return `Hello ${name}~`;
  };
};
const fn = getFn(0);
console.log(fn('Neo'));
console.log(fn('Lewis'));
fn('Evan');
fn('Amy');

// 1
// Hello Neo~
// 2
// Hello Lewis~
// 3
// 4
