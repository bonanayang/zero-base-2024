// 불변성(Immutability)은 생성된 데이터가 메모리에서 변경되지 않는 것을,
// 가변성(Mutability)은 생성된 메모리에서 변경될 수 있음을 의미합니다.
// 원시형(문자, 숫자, 불린, null, underfind)은 붛면성,
// 참조형(배열, 객체, 함수)은 가변성을 가지고 있습니다.

const a = 1;
let b = a;
b = 2;
console.log(a);
console.log(b);

const c = { x: 1, y: 2 };
const d = c;
d.x = 99;
console.log(c);
console.log(d);

const e = [1, 2, 3];
const f = e;
f[0] = 99;
console.log(e);
console.log(f);

// 1
// 2
// { x: 99, y: 2 }
// { x: 99, y: 2 }
// [ 99, 2, 3 ]
// [ 99, 2, 3 ]
