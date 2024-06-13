import { saveState, loadState } from './state.js';

const $nav = document.querySelector('nav');

let isSideNavigationOpen = false;

window.addEventListener('DOMContentLoaded', () => {
  const state = loadState();
  isSideNavigationOpen = state === null ? false : state.isSideNavigationOpen;

  $nav.classList.toggle('active', isSideNavigationOpen);
  document.body.style.visibility = 'visible';
});

window.addEventListener('beforeunload', () => {
  saveState({ isSideNavigationOpen });
});

window.querySelector('.toggle').addEventListener('click', () => {
  isSideNavigationOpen = !isSideNavigationOpen;

  // 초기 랜더링 시에 발생하는 불필요한 트랜지션을 방지하기 위해 body 요소에 추가되어 있는 preload 클래스를 제거해 트랜지션을 활성화시킨다.
  document.body.classList.remove('preload');
  $nav.classList.toggle('active', isSideNavigationOpen);
});
