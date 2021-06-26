let counterValue = 0;

const increment = () => {
  counterValue += 1;
  return (document.getElementById('value').innerHTML = counterValue);
};

const decrement = () => {
  counterValue -= 1;
  return (document.getElementById('value').innerHTML = counterValue);
};

const targetBtnIncr = document.querySelector('[data-action="increment"]');
const targetBtnDecr = document.querySelector('[data-action="decrement"]');

targetBtnIncr.addEventListener('click', increment);
targetBtnDecr.addEventListener('click', decrement);
