// 클래스 - Getter & Setter

class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(value) {
    const names = value.split(' '); // ['Lewis', 'Park']
    this.firstName = names[0];
    this.lastName = names[1];
  }
}

const neo = new User('Noe', 'Park');

// Get
console.log(neo.fullName); // Noe Park
// Set
neo.fullName = 'Lewis Park';

console.log(neo); //User { firstName: 'Lewis', lastName: 'Park' }
