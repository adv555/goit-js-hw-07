const refs = {
  targetBtnIncr: document.querySelector('[data-action="increment"]'),
  targetBtnDecr: document.querySelector('[data-action="decrement"]'),
};

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  return (document.getElementById('value').textContent = counterValue);
};

const decrement = () => {
  counterValue -= 1;
  return (document.getElementById('value').textContent = counterValue);
};

refs.targetBtnIncr.addEventListener('click', increment);
refs.targetBtnDecr.addEventListener('click', decrement);
