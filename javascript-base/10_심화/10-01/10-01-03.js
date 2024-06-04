// 함수 재귀(Recursion)란, 함수가 자기 자신을 호출하는 것을 말합니다.

class User {
  constructor(name, parent) {
    this.name = name;
    this.parent = parent;
  }
  static getRootUser(user) {
    if (user.parent) {
      return User.getRootUser(user.parent);
    }
    return user;
  }
}

const neo = { name: 'Neo' };
const evan = { name: 'Evan', neo };
const lewis = { name: 'Lewis', evan };
const amy = { name: 'Amy', lewis };

console.log(User.getRootUser(evan));
