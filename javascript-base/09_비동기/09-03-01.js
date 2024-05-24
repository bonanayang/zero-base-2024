// 비동기 - Promise
// 비동기 작업의 완료나 실패 시점을 지정하고 그 결과를 반환할 수 있습니다.
// const promise = new Promise((resolve, reject) => {})
// Promise.then(() => {});

function timer(cb) {
  setTimeout(() => {
    console.log(1);
    cb('1 is Done!');
  }, 2000);
}

timer((msg) => {
  console.log(msg);
  console.assert(2);
});
