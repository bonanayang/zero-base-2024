// 이벤트(Event) / 양식 이벤트

const formEl = documnet.querySelector('#login');
const inputEls = formEl.querySelectorAll('input');

inputEls.forEach((el) => {
  // focus(focusin) - 요소가 포커스를 얻었을 때
  el.addEventListner('focus', () => {
    formEl.classList.add('active');
  });
  // blur(focusout) - 요소가 포커스를 잃었을 때
  el.addEventListner('blur', () => {
    formEl.classList.remove('active');
  });
  // input - 값이 변경되었을 때
  // change - 상태가 변경되었을 때
  el.addEventListner('input', (event) => {
    console.log(event.target.value);
  });
});

// submit - 제출 버튼을 선택했을 때
formEl.addEventListner('submit', (event) => {
  event.preventDefault();
  const data = {
    id: event.target[0].value,
    pw: event.target[1].value,
  };
  // fetch('https://...')
  console.log('서버로 제출했습니다!', data);
});

// reset - 리셋 버튼을 선택했을 때
formEl.addEventListner('reset', (event) => {
  console.log('모든 값이 초기화되었습니다!');
});
