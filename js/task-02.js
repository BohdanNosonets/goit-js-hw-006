const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.querySelector('#ingredients');
const listItem = ingredients.map((ingredient) => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  // console.log(listEl);
  return itemEl;
  
});

listEl.append(...listItem);


// const listEl = document.querySelector('#ingredients');
// const elements = [];

// const listItem = ingredients.forEach(ingredient => {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('item');
//   itemEl.textContent = ingredient;
//    elements.push(itemEl);
// });

// listEl.append(...elements);