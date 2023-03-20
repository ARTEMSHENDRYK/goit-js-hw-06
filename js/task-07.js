const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('input', onInput);

function onInput(event) {
  spanRef.style.fontSize = event.currentTarget.value + 'px';
 }