// 비동기(Asynchronous) 코드는 작성된 순서대로 실행되지만, 특정 작업이 끝나기 전에 다음 작업이 시작될 수 있습니다.

const h1El = document.querySelector('h1');
h1El.textContent = 'Loading';
const timer = setInterval(() => {
  h1El.textContent += '.';
}, 500);

const imgEl = document.createElement('img');
imgEl.src = 'https://picsum.photos/3000/2000';
imgEl.addEventListener('load', () => {
  document.body.append(imgEl);
  clearInterval(timer);
  h1El.textContent = 'Done!';
});
