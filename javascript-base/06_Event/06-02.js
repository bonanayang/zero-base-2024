// 이벤트(Event) / 이벤트 객체
// .addEventListener() 핸들러의 첫 매개변수로, 발생한 이벤트의 정보를 가진 객체를 전달합니다.

const parentEl = document.querySelector('.parent');

parentEl.addEventListener('click', (event) => {
  console.log(parentEl);
  // console.log(event.target);
  console.log(event);
});

const inputEl = document.querySelector('input');
inputEl.addEventListener('keydown', (event) => {
  console.log(event.key);
  console.log(inputEl.value);
  console.log(event.target.value);
});
