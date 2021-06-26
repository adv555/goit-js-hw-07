const inputEl = document.getElementById('validation-input');
const inputElLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length == inputElLength) {
    inputEl.classList.remove('invalid');
    return inputEl.classList.add('valid');
  }
  inputEl.classList.remove('valid');
  return inputEl.classList.add('invalid');
}
