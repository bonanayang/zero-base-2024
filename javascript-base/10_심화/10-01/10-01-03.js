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
const evan = { name: 'Evan', parent: neo };
const lewis = { name: 'Lewis', parent: evan };
const amy = { name: 'Amy', parent: lewis };

console.log(getRootUser(amy));
