const refs = {
  input: document.getElementById('name-input'),
  nameLable: document.getElementById('name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  //   console.log(event.currentTarget.value);

  // refs.nameLable.innerHTML = event.currentTarget.value;
  refs.nameLable.textContent = event.currentTarget.value;

  if (event.currentTarget.value === null || event.currentTarget.value === '') {
    return (document.getElementById('name-output').innerHTML = 'незнакомец');
  }
}
