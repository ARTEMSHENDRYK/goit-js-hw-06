const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.getElementById('ingredients');

const elements = ingredients.map(ingredient => {
  const li = document.createElement('li');
  
  li.textContent = ingredient;
  li.classList.add('item');

  return li;
});

ingredientsRef.append(...elements);