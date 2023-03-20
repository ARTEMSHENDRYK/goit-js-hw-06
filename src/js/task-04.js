let counterValue = 0;
const valueRef = document.getElementById('value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click',
  () => valueRef.textContent = counterValue -= 1);

incrementBtn.addEventListener('click',
  () => valueRef.textContent = counterValue += 1);
