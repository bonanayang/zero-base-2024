// DOM - 검색과 탐색
// document.quertSelector(선택자) - 선택자로 검색한 요소를 하나 반환합니다.
// 만약 검색 결과가 없으면, `null`을 반환합니다.

// const el = document.querySelector('.child:nth-child(1)');
// console.log(el);
// // <div id="c1" class="child">사과</div>

// const el = document.querySelector('.parent');
// console.log(el);
// // div.parent

// console.log(el.querySelector('div'));
// // div#c1.child

// -------------------------------
// DOM - 검색과 탐색
// document.querySelectorAll(선택자)
// - 선택자로 건색한 모든 요소를 NodeList 객체로 반환합니다.

// const nodeList = document.querySelectorAll('.child');
// console.log(nodeList); // NodeList(3) [div#c1.child, div.child, div.child]
// console.log(nodeList[0], nodeList[1], nodeList[2]);

// // NodeList 객체는 유사배열이며 `.forEach()` 메소드는 내장되어 있지만,
// // 기타 배열 메소드는 사용할 수 없습니다.
// nodeList.forEach((el, index) => console.log(index + 1, el));

// // NodeList 객체는 `Array.from()` 메소드를 통해 배열로 변환할 수 있습니다.
// const nodes = Array.from(nodeList);
// const names = nodes.map((el) => el.textContent);
// console.log(names);
// -------------------------------
// DOM - 검색과 탐색
// document.getElementById(아이디)
// - HTML `id` 속성(Attributes) 값으로 검색한 요소를 하나 반환합니다.
// 만약 섬색 결과가 없으면, `null`을 반환합니다.

// const idEl = document.getElementById('c1');
// console.log(idEl);

// const selEl = document.querySelector('#c1');
// console.log(selEl);
// -------------------------------
// DOM - 검색과 탐색
// 노드.parentElement - 노드의 부모 요소를 반환합니다.

// const el = document.querySelector('.child');
// console.log(el); // div#c1.child
// console.log(el.parentElement); // div.parent
// -------------------------------
// DOM - 검색과 탐색
// 요소.reviousElementSibling - 요소의 이전 형제 요소를 반환합니다.
// 요소.nextElementSibling - 요소의 다음 형제 요소를 반환합니다.

// const el = document.querySelector('.child');
// console.log(el.previousElementSibling); // null
// console.log(el.nextElementSibling); // <div class="child">바나나</div>
// -------------------------------
// DOM - 검색과 탐색
// 요소.children - 요소의 모든 자식 요소를 반환합니다.
// 요소.firstElementChild - 요소의 첫 번째 자식 요소를 반환합니다.
// 요소.lastElementChild - 요소의 마지막 자식 요소를 반환합니다.

const el = document.querySelector('.parent');
console.log(el.children); // HTMLCollection(3) [div#c1.child, div.child, div.child, c1: div#c1.child]
console.log(el.children[el.children.length - 1]); // <div class="child">체리</div>
console.log(el.firstElementChild); // <div id="c1" class="child">사과</div>
console.log(el.lastElementChild); // <div class="child">체리</div>
