// 클래스 - Getter & Setter

class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.fullName = `${first} ${last}`;
  }
}

const neo = new User('Noe', 'Park');

// Get
console.log(neo.fullName); // Noe Park
// Set
neo.fullName = 'Lewis Park';

console.log(neo); // User { firstName: 'Noe', lastName: 'Park', fullName: 'Lewis Park' }
