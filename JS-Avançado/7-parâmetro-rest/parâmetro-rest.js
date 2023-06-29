function mensagem(mensagem, ...nomes) {
  nomes.map(nome => console.log(`${mensagem} ${nome}`));
}

mensagem(
  'Parabéns você ta quase chegando no objetivo,',
  'Joao',
  'Pedro',
  'Rafael'
);


