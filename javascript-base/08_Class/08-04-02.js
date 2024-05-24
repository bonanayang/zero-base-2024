// 클래스 - 상속 (Inheritance)
//  - 클래스의 속성과 메소드를 다른 클래스에게 확장(Extends)해 재사용하는 기능을 말합니다.

class User {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
class Guest extends User {
  constructor(name) {
    super(name);
  }
}
class Member extends User {
  constructor(name) {
    super(name);
    this.private = true;
  }
  getPrivate() {
    return this.private;
  }
}
class Admin extends Member {
  constructor(name) {
    super(name);
    this.admin = true;
  }
}

const neo = new Guest('Neo');
const evan = new Member('Evan');
const lewis = new Admin('Lewis');

console.log(neo); // Guest { name: 'Neo' }
console.log(evan); // Member { name: 'Evan', private: true }
console.log(lewis); // Admin { name: 'Lewis', private: true, admin: true }

console.log(evan.getPrivate()); // true

console.log(neo.constructor); // [class Guest extends User]
console.log(evan.constructor); // [class Member extends User]
console.log(lewis.constructor); // [class Admin extends Member]

console.log(neo instanceof Guest); // true
console.log(evan.constructor === Member); // true
console.log(lewis.constructor === User); // false
