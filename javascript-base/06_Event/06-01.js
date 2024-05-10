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
// 이벤트(Event)
// .addEventListener() 핸들러의 첫 매개변수로, 발생한 이벤트의 정보를 가진 객체를 전달합니다.

// const parentEl = document.querySelector('.parent');

// parentEl.addEventListener('click', (event) => {
//   console.log(parentEl);
//   console.log(event.target);
// });

// const inputEl = document.querySelector('input');
// inputEl.addEventListener('keydown', (event) => {
//   console.log(event.key);
//   console.log(inputEl.value);
//   console.log(event.target.value);
// });
// ---------------------------------------
// 이벤트(Event)
// event.preventDefault() - 이벤트의 기본 동작을 방지합니다.

// <a> 태그에서 페이지 이동 방지!
const anchorEl = document.querySelector('a');
anchorEl.addEventListener('click', (event) => {
  // event.preventDefault()
});

// 마우스 휠의 스크롤 동작 방지!
const parentEl = document.querySelector;
