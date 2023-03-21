const boxesRef = document.querySelector('#boxes');
const inputRef = document.querySelector('input'); 
const createRef = document.querySelector('button[data-create]');
const destroyRef = document.querySelector('button[data-destroy]');

createRef.addEventListener('click', onClickCreate);
destroyRef.addEventListener('click', onClickDestroy);

function onClickCreate(event) {
  createBoxes(inputRef.value);
}

function createBoxes (amount) {
  let markup = '';
  for (let i = 1; i <= amount; i += 1) {
    markup += `<div style="width: ${20 + i * 10}px; height:${20 + i * 10}px; background: ${getRandomHexColor()};"></div>`;
  } 
  boxesRef.insertAdjacentHTML('beforeend', markup);  
}

function onClickDestroy(event) {
  boxesRef.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}