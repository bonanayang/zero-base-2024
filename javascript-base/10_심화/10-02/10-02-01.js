// this 키워드는 일반 함수와 화살표 함수에 따라 다르게 정의됩니다.
// 일반 함수는 호출 위피에서 this가 정의됩니다.
// 화살표 함수는 선언 위치(렉시컬 스코프)에서 this가 정의됩니다.

function User() {
  this.name = 'User';
  return {
    name: 'Neo',
    age: 85,
    getInfo: function () {
      return `${this.name}는 ${this.age}세입니다.`;
    },
  };
}

const u = new User();
console.log(u.name); // Neo
console.log(u.age); // 85
console.log(u.getInfo());

const evan = {
  name: 'Evan',
  age: 25,
};
console.log(u.getInfo.call(evan));

// Neo는 85세입니다.
// Evan는 25세입니다.
