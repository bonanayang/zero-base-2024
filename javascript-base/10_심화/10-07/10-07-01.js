// 렉시컬 스코프(Lecial Scope)는 정적 스코프(Static Scope)라고도 하며,
// 함수를 선언한 위치에서 유효하게 접근 가능한 유효 범위를 말합니다.

const a = {
  fnA() {
    console.log('fnA', this); // fnA { fnA: [Function: fnA], fnX: [Function: fnX] }
    const b = {
      fnB() {
        console.log('fnB', this); // fnB { fnB: [Function: fnB] }
        const c = {
          fnC() {
            console.log('fnC', this); // fnC { fnC: [Function: fnC] }
            console.log('a', a); // a { fnA: [Function: fnA], fnX: [Function: fnX] }
            console.log('b', b); // b { fnB: [Function: fnB] }
            console.log('c', c); // c { fnC: [Function: fnC] }
            console.log('x', x); // ReferenceError: x is not defined
          },
        };
        return c;
      },
    };
    return b;
  },
  fnX() {
    console.log('fnX', this);
    const x = {
      fnY() {
        console.log('fnY', this);
        console.log('a', a);
        console.log('b', b);
        console.log('x', x);
      },
    };
  },
};
a.fnA().fnB().fnC();
a.fnX();
