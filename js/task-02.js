const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const ingredientsEl = document.getElementById('ingredients');

// =========== создает отдельный li =========== //

const makeRecipe = ingredient => {
  const liItemEl = document.createElement('li');
  liItemEl.classList.add('ingredients__item');
  liItemEl.textContent = ingredient;
  return liItemEl;
};

// =========== вставит все li за одну операцию в список ul =========== //

ingredients.forEach(ingredient => {
  return ingredientsEl.append(makeRecipe(ingredient));
});
