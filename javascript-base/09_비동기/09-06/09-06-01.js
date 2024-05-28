// 이행과 거부, 예외 처리

const h1El = document.querySelector('h1');
const ulEl = document.createElement('ul');
ulEl.classList.add('users');
document.body.append(ulEl);

h1El.addEventListener('click', async () => {
  const loaderEl = document.createElement('div');
  loaderEl.classList.add('loader');
  ulEl.innerHTML = '';
  ulEl.append(loaderEl);
  try {
    const res = await fetch('https://api.heropy.dev/vsers');
    const data = await res.json();
    console.log(data);
    const { users } = data;
    const liEls = users.map((user) => {
      const liEl = document.createElement('li');
      liEl.textContent = user.name;
      liEl.dataset.photo = user.photo?.url || 'https://heropy.dev/favicon.png';
      if (!user.photo) {
        liEl.classList.add('no-photo');
      }
      const loaderEl = document.createElement('div');
      loaderEl.classList.add('loader');
      liEl.prepend(loaderEl);
      return liEl;
    });
    loaderEl.remove();
    ulEl.append(...liEls);
    liEls.forEach(async (liEl) => {
      try {
        const imgEl = await loadImage(liEl.dataset.photo);
        liEl.prepend(imgEl);
      } catch (error) {
        console.log(error);
      } finally {
        liEl.querySelector('.loader').remove();
      }
    });
  } catch (error) {
    console.log(error);
    ulEl.textContent = '사용자 정보를 찾을 수 없어요...';
    loaderEl.remove();
  }
});

function loadImage(src) {
  return new Promise((resolve) => {
    const imgEl = document.createElement('img');
    imgEl.src = src;
    imgEl.addEventListener('load', () => {
      resolve(imgEl);
    });
  });
}
