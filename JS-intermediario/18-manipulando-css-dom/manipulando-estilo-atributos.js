function alterarCorDeFundoPrimeiroPost() {
  let posts = document.getElementsByClassName('post');
  let primeiroPost = posts[0];
  primeiroPost.style.backgroundColor = 'lightcoral';
}

function aumentarFonteSegundoPost() {
  let textoPosts = document.getElementsByClassName('texto-post');
  let textoSegundoPost = textoPosts[1];
  textoSegundoPost.classList.add('fonte-grande');
}

// function marcarRadioMasculino() {
//   let generos = document.getElementsByName('genero');
//   let masculino = generos[0];
//   console.log(generos);
//   masculino.checked = 'true';
// }

// function marcarRadioFeminino() {
//   let generos = document.getElementsByName('genero');
//   let feminino = generos[1];
//   feminino.checked = 'true';
// }

function marcarRadio(genero) {
  let radioMasculino = document.getElementById('masculino');
  let radioFeminino = document.getElementById('feminino');

  if (genero === 'M') {
    radioMasculino.checked = 'true';
  } else if (genero === 'F') {
    radioFeminino.checked = 'true';
  }
}
