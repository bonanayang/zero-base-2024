// do something!
addEventListener('DOMContentLoaded', (event) => {
  console.log(event);
});

document.addEventListener('DOMContentLoaded', function () {
  this.body.classList.add('visible');
});

const navEl = document.querySelector('.nav');
const activeEl = document.querySelector('.active');
const toggleEl = document.querySelector('.toggle');

toggleEl.addEventListener('click', (event) => {
  navEl.classList.add('active');
  toggleEl.addEventListener('click', (event) => {
    navEl.classList.remove('active');
  });
});
