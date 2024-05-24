// 가져오기 (Import)
//  - JS 파일의 최상단에 위치해야 합니다!

// import abc, { apple, banana, c as cherry, D as Durian } from './module.js';

// console.log(abc); // [1, 2, 3]
// console.log(a, banana); // 1 'Banana'
// console.log(cherry); // ƒ c() {}
// console.log(Durian); // class D {}

// 와일드카드(Wildcard) 문자는, 여러 개를 한 번에 지정한다는 의미를 가지는 특수한 기호이며, 자바스크립트 모듈에서는 별표(*)가 와일드카드 문자입니다.
import * as abc from './module.js';

console.log(abc); // Module {…}
