// 비동기 - 콜백과 콜백 지옥 (Callback Hell)

setTimeout(() => {
  console.log(1);
}, 2000);

console.log(2);
// 2
// 1
