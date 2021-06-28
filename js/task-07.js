const refs = {
  input: document.getElementById('font-size-control'),
  text: document.getElementById('text'),
};

const onInputChangeRange = event => {
  refs.text.style.fontSize = event.currentTarget.value + 'px';
};

refs.input.addEventListener('input', onInputChangeRange);
