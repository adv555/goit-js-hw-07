const renderBtnEl = document.querySelector('[data-action="render"]');
const destroyBtnEl = document.querySelector('[data-action="destroy"]');
const boxesEl = document.getElementById('boxes');

renderBtnEl.addEventListener('click', getAmount);
destroyBtnEl.addEventListener('click', destroyBoxes);

// ========= get amount ========= //
function getAmount() {
  let amount = +document.querySelector('#controls input').value;
  createBoxes(amount);
}
// ========= create boxMarckup ========= //
function createBoxes(amount) {
  const basicSize = 30;
  const boxesWrapperEl = document.createElement('div');

  boxesWrapperEl.classList.add('boxes-wrapper');
  document.querySelector('#controls input').value = '';

  for (let i = 0; i < amount; i++) {
    const boxItemEL = document.createElement('div');

    const size = basicSize + i * 10;
    const color = '#' + ((Math.random() * 0xffffff) << 0).toString(16);

    boxItemEL.classList.add('box__item');
    boxItemEL.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${color};`;

    boxesWrapperEl.appendChild(boxItemEL);
  }

  boxesEl.appendChild(boxesWrapperEl);
}

// ========= remove boxMarckup ========= //

function destroyBoxes() {
  boxesEl.innerHTML = '';
  document.querySelector('#controls input').value = '';
}
