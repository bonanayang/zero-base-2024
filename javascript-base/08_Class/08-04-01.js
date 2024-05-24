// 클래스 - 상속 (Inheritance)
//  - 클래스의 속성과 메소드를 다른 클래스에게 확장(Extends)해 재사용하는 기능을 말합니다.

class A {
  constructor(a) {
    this.a = a;
  }
}
class B extends A {
  constructor(a, b) {
    super(a);
    this.b = b;
  }
}

const a = new A(1);
const b = new B(1, 2);

console.log(a); // A { a: 1 }
console.log(b); // B { a: 1, b: 2 }

console.log(a instanceof A); // true
console.log(b instanceof A); // true

console.log(a instanceof B); // false
console.log(b instanceof B); // true

console.log(a instanceof Object); // true
console.log(b instanceof Object); // true
