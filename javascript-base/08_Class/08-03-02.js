// 클래스 - 정적 메소드(Static method)
// - 정적 메소드는 주로 클래스의 유틸리티(보조) 함수를 만들 때 사용합니다.
// - 인스턴스와는 연결되지 않으며, 클래스 자체에서 호출해야 합니다.

class User {
  constructor(frist, last) {
    this.fristName = frist;
    this.lastName = last;
  }
  static isUser(user) {
    return user instanceof User;
  }
}

const neo = new User('Neo', 'Park');
const evan = new User('Evan', 'Yang');
const lewis = {
  name: 'Lewis Lee',
  age: 72,
};

console.log(User.isUser(neo)); // true
console.log(User.isUser(evan)); // true
console.log(User.isUser(lewis)); // false
