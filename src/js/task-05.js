const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');
const spanDefault = spanRef.textContent;

inputRef.addEventListener('input', onInput);

function onInput(event) {
  const inputText = event.currentTarget.value;
  spanRef.textContent = inputText;
  if (inputText.trim().length === 0) {
    spanRef.textContent = spanDefault;
    event.currentTarget.value = inputText.trim();
  }
}
