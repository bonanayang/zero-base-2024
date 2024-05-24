// 비동기 - 콜백과 콜백 지옥 (Callback Hell)

function renderImage(callback) {
  const imgEl = document.createElement('img');
  imgEl.src = 'https://picsum.photos/3000/2000';
  imgEl.addEventListener('load', () => {
    document.body.append(imgEl);
    callback();
  });
}
renderImage(() => {
  console.log.log('Done!');
});
