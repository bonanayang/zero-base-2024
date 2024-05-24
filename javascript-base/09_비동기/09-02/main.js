// 비동기 - 콜백과 콜백 지옥 (Callback Hell)

import { timer } from './timer.js';

timer(() => {
  console.log(2);
});

// 1
// 2
