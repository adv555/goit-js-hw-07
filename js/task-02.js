const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];
const ingredientsEl = document.getElementById('ingredients');

// ============= Вариант 1 ============= //

const items = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;

  return itemEl;
});

ingredientsEl.append(...items);

// ============= Вариант 2 ============= //

// const fragment = document.createDocumentFragment();

// const makeRecipeMarkup = ingredients => {
//   ingredients.forEach(ingredient => {
//     const liItemEl = document.createElement('li');
//     liItemEl.textContent = ingredient;

//     return fragment.append(liItemEl);
//   });

//   return fragment;
// };

// ingredientsEl.append(makeRecipeMarkup(ingredients));
