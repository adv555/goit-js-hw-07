const refs = {
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  boxes: document.getElementById('boxes'),
  basicSize: 30,
};

refs.renderBtn.addEventListener('click', getAmount);
refs.destroyBtn.addEventListener('click', destroyBoxes);

// ========= get amount ========= //
function getAmount() {
  let amount = +document.querySelector('#controls input').value;
  createBoxes(amount);
}
// ========= create boxesMarckup ========= //
function createBoxes(amount) {
  const boxesWrapperRel = document.createElement('div');
  boxesWrapperRel.classList.add('boxes-wrapper');

  for (let i = 0; i < amount; i++) {
    const boxItemRel = document.createElement('div');

    let size = refs.basicSize + i * 10;
    let color = '#' + ((Math.random() * 0xffffff) << 0).toString(16);

    boxItemRel.classList.add('box__item');
    boxItemRel.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${color};`;

    boxesWrapperRel.appendChild(boxItemRel);
  }

  refs.boxes.appendChild(boxesWrapperRel);
}

// ========= remove boxMarckup ========= //

function destroyBoxes() {
  refs.boxes.innerHTML = '';
  document.querySelector('#controls input').value = '';
}
