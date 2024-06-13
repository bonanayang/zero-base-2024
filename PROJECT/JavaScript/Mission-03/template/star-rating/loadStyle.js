const loadStyle = (href) => {
  if (document.querySelector(`link[href="${href}]`)) return;

  const $link = document.createElement('link');
  $link.href = href;
  $link.rel = 'stylesheet';

  // head 요소의 가장 마지막에 추가된다.
};
