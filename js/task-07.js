const inputEl = document.getElementById('font-size-control');
const text = document.getElementById('text');

const onInputChangeRange = event => {
  text.style.fontSize = event.currentTarget.value + 'px';
};

inputEl.addEventListener('input', onInputChangeRange);
