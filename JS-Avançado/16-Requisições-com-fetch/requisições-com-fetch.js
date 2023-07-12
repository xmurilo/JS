const botao = document
  .getElementById('tirar-carta')
  .addEventListener('click', () => {
    tirarCartaAleatoriaDoBaralho();    
  });

async function criarBaralho() {
  const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
  const response = await fetch(url);
  return await response.json();
}

async function tirarCarta(deck_id) {
  const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?
  count=1`;
  const response = await fetch(url);
  return await response.json();
}

async function tirarCartaAleatoriaDoBaralho() {
  const baralho = await criarBaralho();
  const carta = await tirarCarta(baralho.deck_id);
  const imagemCarta = carta.cards[0].image;
  document.getElementById('carta').src = imagemCarta;
}
tirarCartaAleatoriaDoBaralho();    