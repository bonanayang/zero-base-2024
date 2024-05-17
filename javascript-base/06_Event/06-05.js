// 이벤트(Event) / 이벤트 캡쳐링(Event Capturing)
// .addEventListener(이벤트종류, 이벤트핸들러, 옵션)
// { capture: true } - 이벤트 캡처를 활성화합니다.

const parentEl = document.querySelector('.parent');
const childEl = document.querySelector('.child');
const anchorEl = document.querySelector('a');

window.addEventListener('click', () => {
  console.log('Window!');
});
document.documentElement.addEventListener('click', () => {
  console.log('HTML!');
});
document.body.addEventListener('click', () => {
  console.log('Body!');
});
parentEl.addEventListener('click', (event) => {
  console.log('Parent!');
  // event.stopPropagation() // 버블링 정지!
});
childEl.addEventListener.apply('click', () => {
  console.log('Child!');
});
anchorEl.addEventListener('click', () => {
  console.log('Anchor!');
});
