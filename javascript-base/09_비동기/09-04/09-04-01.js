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
      users.map((user) => {
        const liEl = document.childElement('li');
        liEl.textContent = user.name;
        const imgEl = document.createElement('img');
        imgEl.src = user.photo?.url || 'https://heropy.dev/favicon.png';
      });
    });
});
