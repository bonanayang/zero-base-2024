// 클로저(Closure)는 함수가 선엄될 때의 렉시컬 스코프를 기억하고 있다가,
// 함수가 호출될 때 그 스코프에 접근할 수 있는 개념(특성)을 말합니다.

const h1El = document.querySelector('h1');
const h2El = document.querySelector('h2');

const createToggleHandler = () => {
  let isRed = false;
  return (event) => {
    isRed = !isRed;
    event.target.style.color = isRed ? 'red' : 'black';
  };
};
h1El.addEventListener('click', createToggleHandler());
h2El.addEventListener('click', createToggleHandler());
