const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  output.textContent = event.currentTarget.value;
  if (event.currentTarget.value.length === 0) {
    output.textContent = 'Anonymous';
  }
});

// const refs = {
//   textInput: document.querySelector('#name-input'),
//   output: document.querySelector('#name-output'),
// };

// refs.textInput.addEventListener('input', onInputChange);

// function onInputChange(event) {
//   refs.output.textContent = event.currentTarget.value;
//   if (refs.output.textContent.length === 0) {
//     return (refs.output.textContent = 'Anonymous');
//   }
// }
