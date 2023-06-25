let ordens = [
  { cliente: 'João', tipo: 'compra', quantidade: 34, ativo: 'NFLX34' },
  { cliente: 'Pedro', tipo: 'venda', quantidade: 50, ativo: 'AAPL34' },
  { cliente: 'Bruno', tipo: 'compra', quantidade: 97, ativo: 'GOGL34' }
];

// let quantidadeDeOrdens = 0;
// for (let i = 0; i < ordens.length; i++) {
//   quantidadeDeOrdens += ordens[i].quantidade;
// }

let quantidadeDeOrdens = ordens.reduce(function (numeroOrdens, ordens) {
  return (numeroOrdens += ordens.quantidade);
}, 0);
console.log(quantidadeDeOrdens);

