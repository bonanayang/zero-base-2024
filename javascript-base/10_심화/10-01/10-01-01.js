// 함수 재귀(Recursion)란, 함수가 자기 자신을 호출하는 것을 말합니다.
let i = 0;
function a() {
  console.log(i, 'A');
  i += 1;
  if (i < 4) {
    a();
  }
}

a();
