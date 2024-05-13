// 이벤트(Event)
// 대상.addEventListener(이벤트종류, 핸들러) - 대상에서 청취(Listen)할 이벤트 종류와 발생했을 때 호출할 콜백(Handler)을 등록합니다.

// const parentEl = document.querySelector('.parent');
// const childEl = document.querySelector('.child');

// parent.addEventListener('click', () => {
//   console.log('Parent!');
// });
// childEl.addEventListener('click', () => {
//   console.log('Child!');
// });
// ---------------------------------------
// 이벤트(Event)
// 대상.removeEventListener(이벤트종류, 핸들러) - 대상에 등록했던 이벤트 핸들러를 제거합니다.

// const parentEl = document.querySelector('.parent');
// const childEl = document.querySelector('.child');

// const Handler = () => {
//   console.log('Parent!');
// };

// parentEl.addEventListener('click', Handler);
// childEl.addEventListener('click', () => {
//   parentEl.removeEventListener('click', Handler);
// });
// ---------------------------------------
