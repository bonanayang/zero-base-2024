// 이벤트(Event) / 이벤트 버블링(Event Bubbling)
// event.stopPropagation() - 하위 요소에서 상위 요소로의 이벤트 전파(버블)를 정지합니다.

// const parentEl = document.querySelector('.parent');
// const childEl = document.querySelector('.child');
// const anchorEl = document.querySelector('a');

// window.addEventListener('click', () => {
//   console.log('Window!');
// });
// document.documentElement.addEventListener('click', () => {
//   console.log('HTML!');
// });
// document.body.addEventListener('click', () => {
//   console.log('Body!');
// });
// parentEl.addEventListener('click', (event) => {
//   console.log('Parent!');
//   // event.stopPropagation() // 버블링 정지!
// });
// childEl.addEventListener.apply('click', () => {
//   console.log('Child!');
// });
// anchorEl.addEventListener('click', () => {
//   console.log('Anchor!');
// });
// -------------------------------------------

const childEl = document.querySelector('.child');
const tooltipEl = document.querySelector('.tooltip');

childEl.addEventListener('click', () => {
  tooltipEl.classList.add('active');
  event.stopPropagation();
});
window.addEventListener('click', () => {
  tooltipEl.classList.remove('active');
});
