// Throttle
// - 정해진 시간 간격으로 함수를 실행하도록 제한합니다.
window.addEventListener(
  'scroll',
  _.throttle(function () {
    console.log('Scroll!');
  }, 400)
);

// Debbounce
// - 정해진 시간 동안 함수가 실행되지 않으면, 함수를 실행합니다. (마지막에 한 번만 실행)
async function getMovies(moviesName) {
  const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&s=${moviesName}`);
  return await res.json();
}
const inputEl = document.querySelector('input');
inputEl.addEventListener(
  'input',
  _.debounce(async function () {
    console.log(await getMovies(inputEl.value));
  }, 400)
);
