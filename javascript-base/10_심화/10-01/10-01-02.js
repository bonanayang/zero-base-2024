// 함수 재귀(Recursion)란, 함수가 자기 자신을 호출하는 것을 말합니다.

const neo = { name: 'Neo' };
const evan = { name: 'Evan', parent: neo };
const lewis = { name: 'Lewis', parent: evan };
const amy = { name: 'Amy', parent: lewis };

const getRootUser = (user) => {
  if (user.parent) {
    return getRootUser(user.parent);
  }
  return user;
};

console.log(getRootUser(amy));
// { name: 'Neo' }
// 최상위 사용자를 얻어내는 방식
