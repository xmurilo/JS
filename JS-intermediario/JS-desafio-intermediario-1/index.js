let titulo = document.getElementById('titulo');
let saibaMais = document.getElementById('saiba-mais');
let contadorNext = 0;
document.getElementById('next').addEventListener('click', function () {
  contadorNext++;
  if (contadorNext == 1 || contadorNext == 2 || contadorNext == 3) {
    document.getElementById('back').style.opacity = '1';
  }
  if (contadorNext == 1) {
    document.querySelector('body').classList.add('imagem-2');
    titulo.innerHTML = `Titulo imagem 2`;
    saibaMais.style.color = '#D9DD10';
  } else if (contadorNext == 2) {
    document.querySelector('body').classList.add('imagem-3');
    titulo.innerHTML = `Titulo imagem 3`;
    saibaMais.style.color = '#A63A17';
  } else if (contadorNext == 3) {
    document.querySelector('body').classList.add('imagem-4');
    titulo.innerHTML = `Titulo imagem 4`;
    saibaMais.style.color = '#10ACDD';
    document.getElementById('next').style.opacity = '0.5';
  } else if (contadorNext > 3) {
    contadorNext = 3;
  }
});

document.getElementById('back').addEventListener('click', function () {
  if (contadorNext == 1) {
    contadorNext--;
    document.querySelector('body').classList.remove('imagem-2');
    document.querySelector('body').classList.add('imagem-1');
    titulo.innerHTML = `Titulo imagem 1`;
    saibaMais.style.color = '#c50000';
    document.getElementById('back').style.opacity = '0.5';
  } else if (contadorNext == 2) {
    contadorNext--;
    document.querySelector('body').classList.remove('imagem-3');
    document.querySelector('body').classList.add('imagem-2');
    titulo.innerHTML = `Titulo imagem 2`;
    saibaMais.style.color = '#D9DD10';
  } else if (contadorNext == 3) {
    contadorNext--;
    document.querySelector('body').classList.remove('imagem-4');
    document.querySelector('body').classList.add('imagem-3');
    titulo.innerHTML = `Titulo imagem 3`;
    saibaMais.style.color = '#A63A17';
    document.getElementById('next').style.opacity = '1';
  } else if (contadorNext < 0) {
    contadorNext = 0;
  }
});
