const itemRef = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemRef.length}`);

itemRef.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.childElementCount}`);  
});