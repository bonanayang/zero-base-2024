const neo = {
  name: 'Neo',
};
const amy = {
  name: 'Amy',
  getInfo(age, city) {
    return `${this.name}는 ${age}세이고, ${city}에 삽니다.`;
  },
};
console.log(amy.getInfo(neo, 85, '서울'));
// Amy는 [object Object]세이고, 85에 삽니다.

// .call(this, 인수1, 인수2, ...)
// 대상 함수를 주어진 객체(this)의 메소드로 실행합니다.
console.log(amy.getInfo.call(neo, 85, '서울'));
// .apply(this, [인수1, 인수2, ...])
// 대상 함수를 주어진 객체(this)의 메소드로 실행합니다.
console.log(amy.getInfo.apply(neo, [85, '서울']));
// .bind(this)
// 대상 함수를 주어진 객체(this)의 메소드로 실행할 수 있는 새로운 함수를 반환합니다.
const neoGetInfo = amy.getInfo.bind(neo);
setTimeout(() => {
  console.log(neoGetInfo(85, '서울'));
}, 1000);

// Amy는 [object Object]세이고, 85에 삽니다.
// Neo는 85세이고, 서울에 삽니다.
// Neo는 85세이고, 서울에 삽니다.
// Neo는 85세이고, 서울에 삽니다.
