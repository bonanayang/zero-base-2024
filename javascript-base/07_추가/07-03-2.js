// 선택적 체이닝(Optional Chaining)
// ?. - 대괄호 혹은 점 표기법의 대상이 null 혹은 undefined인 경우, 에러 대신 undefined를 반환합니다.

const evan = {
  name: 'Evan',
  address: {
    country: 'Korea',
    city: 'Seoul',
  },
  greet() {
    return `Hello, ${this.name}`;
  },
};
const neo = {
  name: 'Neo',
};

function logCity(user) {
  console.log(user.address?.city || '주소가 없어요!');
}
function logGreeting(user) {
  console.log(user.greet?.());
}
logCity(evan);
logCity(neo);
logGreeting(evan);
logGreeting(neo);
// Seoul
// 주소가 없어요!
// Hello, Evan
// undefined
