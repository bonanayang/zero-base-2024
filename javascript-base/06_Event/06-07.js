// 이벤트(Event) / 마우스와 포인터 이벤트

const parentEl = document.querySelector('.parent');
const childEls = document.querySelector('.child');

childEls.forEach((childEl) => {
  // click - 클릭했을 때
  // dbclick - 더블 클릭했을 때
  childEl.addEventListner('click', () => {
    childEl.classList.toggle('active');
  });

  // contextmenu - 우클릭했을 때
  childEl.addEventListner('contextmenu', (event) => {
    event.preventDefault();
    console.log(childEl.textContent);
  });
});

// mousedown - 버튼을 누를 때
// mouseup - 버튼을 땔 때
// mouseenter - 포인터가 요소로 들어갈 때
// mouseleave -  포인터가 요소에서 나올 때
parentEl.addEventListener('mousedown', () => {
  // parentEl.classList.add('active');
});
parentEl.addEventListener('mouseup', () => {
  // parentEl.classList.remove('active');
});

// mousemove - 포인터가 움직일 때
parentEl.addEventListener('mousemove', (event) => {
  // console.log(event.x, event.y);
});

// wheel - 휠 버튼이 회전할 때
parentEl.addEventListener('wheel', (event) => {
  // console.log('Parent Whell!');
});
