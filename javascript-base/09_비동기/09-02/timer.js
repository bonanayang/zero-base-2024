export function timer(callback) {
  setTimeout(() => {
    console.log(1);
    callback();
  }, 2000);
}
