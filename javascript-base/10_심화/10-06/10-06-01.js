// 얕은 복사(Shallow copy)는 참조형의 최상위 레벯만 복사하는 것을 말합니다.
// 깊은 복사(Deeo copy)는 참조형의 모든 레벨을 복사하는 것을 말합니다.

const a = [
  { x: 1, y: [1, 2] },
  { x: 2, y: [3, 4] },
  { x: 3, y: [5, 6] },
];

const c = { x: 1, y: [1, 2] };
// const d = c;
const d = Object.assign({}, c);
// const d = { ...c };
d.x = 99;
console.log(c); // { x: 1, y: [ 1, 2 ] }
console.log(d); // { x: 99, y: [ 1, 2 ] }

const e = [1, 2, 3];
// const f = e;
// const f = e.slice();
const f = [...e];
f[0] = 99;
console.log(e); // [ 1, 2, 3 ]
console.log(f); // [ 99, 2, 3 ]

const g = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
];
const h = _.cloneDeep(g);
h[0].x = 99;
console.log(g); // [ {x: 1, y: 2}, {x: 3, y: 4}]
console.log(h); // [ {x: 99, y: 2}, {x: 3, y: 4}]
