// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

const button = document.querySelector('button');
const textParagraph = document.querySelector('p');

button.addEventListener('click', () => {
  const text = textParagraph.textContent;
  const promise = new Promise();
  console.log(promise);

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Copied to clipboard!');
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    alert('Could not copy text, please do it manually :)');
  }
});