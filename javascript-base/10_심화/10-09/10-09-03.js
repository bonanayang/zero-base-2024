// 가비지 컬렉션(Garbage Collection)이란,
// 더 이상 사용되지 않는 메모리를 해제하는 프로세스 자바스크립트 엔진이 자동으로 처리됩니다.

// 메모리 누수(Memory Leak)란,
// 더 이상 필요치 않은 데이터가 해제되지 못해 메모리를 계속 차지되는 것을 말합니다.

// 제거된 요소가 참조되지 않도록 주의하세요!
window.addEventListener('click', () => {
  const h1El = document.querySelector('h1');
  if (h1El) {
    console.log(h1El);
    h1El.remove();
  }
});
