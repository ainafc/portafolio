const buttonLink = document.querySelector('.button-link');

buttonLink.addEventListener('mouseover', function() {
  const button = this.querySelector('.button-descargar-cv-home');
  button.style.backgroundColor = '#161515';
  button.style.border = '2px solid #D99923';
  button.style.color = '#fff';
});

buttonLink.addEventListener('mouseout', function() {
  const button = this.querySelector('.button-descargar-cv-home');
  button.style.backgroundColor = '#D99923';
  button.style.border = 'none';
  button.style.color = 'initial';
});