// 비동기 - Promise
// 비동기 작업의 완료나 실패 시점을 지정하고 그 결과를 반환할 수 있습니다.
// const promise = new Promise((resolve, reject) => {})
// Promise.then(() => {});

function loadImage(src) {
  return new Promise((resolve) => {
    const imgEl = document.createElement('img');
    imgEl.src = sec;
    imgEl.addEventListener('load', () => {
      resolve(imgEl);
    });
  });
}
loadImage('https://picsum.photos/3000/2000').then((imgEl) => {
  document.body.append(imgEl);
  console.log('Done!');
});
loadImage('https://picsum.photos/100/200').then((imgEl) => {
  console.log(imgEl);
});
