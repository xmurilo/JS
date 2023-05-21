let camisaInter = {
  cor: 'Vermelho',
  cor2: 'Branca',
  tamanho: 'P',
  tamanho2: 'M',
  tamanho3: 'G',
  promocao50: function (valor, emEstoque, tempoDeEstoque) {
    if (emEstoque > tempoDeEstoque) {
      let valorPromo = valor - valor * (0.5).toFixed(2);
      console.log(
        `Estamos em promoção o valor da camisa sai por R$: ${valorPromo}`
      );
    } else {
      console.log(`R$: ${valor.toFixed(2)}`);
    }
  }
};

camisaInter.promocao50(249.9, 250, 200);
