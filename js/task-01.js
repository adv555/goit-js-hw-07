// ============ количество категорий li.item в ul#categories ============ //

const categoryItemsEl = document.querySelectorAll('.item');
console.log(`В списке ${categoryItemsEl.length} категории.`);

// ======= текст заголовка (h2) и количество элементов в категории ======= //

const categoryItemsDescEl = document.querySelectorAll('.item > ul');

categoryItemsDescEl.forEach(
  element => (
    console.log('Категория:', element.previousElementSibling.textContent),
    console.log('Количество элементов:', element.children.length)
  ),
);
