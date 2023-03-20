const inputRef = document.querySelector('#validation-input');
const dataLengthRef = document.querySelector('input[data-length]');

inputRef.addEventListener('blur', onBlur);

function onBlur(event) {
  if (event.currentTarget.value.trim().length === Number(dataLengthRef.dataset.length))
  {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
    return inputRef;
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
}