const button = document.querySelector('button');
const textParagraph = document.querySelector('p');

button.addEventListener('click', () => {
  const text = textParagraph.textContent;
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