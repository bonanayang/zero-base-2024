// 이벤트(Event) / 키보드 이벤트

const inputEl = document.querySelector('input');

// keydown - 키를 누를 때
// keyup - 키를 (누른 후) 땔 때
inputEl.addEventListener('keydown', (event) => {
  console.log(event.key);
  if (event.key === 'Enter') {
    console.log('Enter!');
  }
  if (event.key === 'Escape') {
    console.log('ESC!');
  }
  if (event.key === ' ') {
    console.log('Space!');
  }
});
