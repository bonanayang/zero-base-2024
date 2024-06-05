// 얕은 복사(Shallow copy)는 참조형의 최상위 레벯만 복사하는 것을 말합니다.
// 깊은 복사(Deeo copy)는 참조형의 모든 레벨을 복사하는 것을 말합니다.

const neo = {
  name: 'Neo',
  age: 85,
};
const evan = {
  name: 'evan',
  age: 22,
  parent: neo,
};

// const newEvan = { ...evan };
const newEvan = _.cloneDeep(evan);
newEvan.name = 'Evan Yang';
newEvan.age = 11;
newEvan.parent.name = 'Amy';

console.log(evan);
console.log(newEvan);
console.log(neo);

// {name: 'evan', age: 22, parent: {name: 'Neo', age: 85}}
// {name: 'Evan Yang', age: 11, parent: {name: 'Amy', age: 85}}
// {name: 'Neo', age: 85}
