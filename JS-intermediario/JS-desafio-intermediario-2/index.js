let resposta1 = document.getElementById('resposta-1');
let resposta2 = document.getElementById('resposta-2');
let contador = 0;
let setas = document.getElementsByClassName('seta');

function abrirConteudo(evento) {
  contador++;
  if (evento == '1') {
    resposta1.innerHTML = 'olaaaa';
    resposta2.innerHTML = ``;
    setas[1].classList.remove('seta-aberta');
    setas[0].classList.add('seta-aberta');
    if (contador > 1) {
      setas[0].classList.remove('seta-aberta');
      resposta1.innerHTML = ``;
      contador = 0;
    }
  }

  if (evento == '2') {
    resposta2.innerHTML = `Ola Fan Farrão`;
    resposta1.innerHTML = ``;
    setas[0].classList.remove('seta-aberta');
    setas[1].classList.add('seta-aberta');
    if (contador > 1) {
      setas[1].classList.remove('seta-aberta');
      resposta2.innerHTML = ``;
      contador = 0;
    }
  }
}
