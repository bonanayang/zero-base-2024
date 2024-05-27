// Async & Await

const h1El = document.querySelector('h1');
const ulEl = document.createElement('ul');
ulEl.classList.add('users');
document.body.append(ulEl);

h1El.addEventListener('click', () => {
  ulEl.textContent = 'Loading...';
  fetch('https://api.heropy.dev/v0/users')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const { users } = data;
      const liEls = users.map((user) => {
        const liEl = document.createElement('li');
        liEl.textContent = user.name;
        const imgEl = document.createElement('img');
        imgEl.src = user.photo?.url || 'https://heropy.dev/favicon.png';
        if (!user.photo) {
          liEl.classList.add('no-photo');
        }
        liEl.prepend(imgEl);
        return liEl;
      });
      ulEl.textContent = '';
      ulEl.append(...liEls);
    });
});
