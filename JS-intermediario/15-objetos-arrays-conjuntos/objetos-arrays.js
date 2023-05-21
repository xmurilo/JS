// let jogo1 = {
//   nome:'The Last Of Us'
// }

// let jogo2 = {
//   nome:'God Of War'
// }

// let videoGame = {
//   nome: 'PlayStation 5',
//   valor: 4000,
//   jogos: [jogo1, jogo2]
// };

// let jogo3 = {
//   nome:'Resident Evil 4'
// }
// videoGame.jogos.push(jogo3)
// console.log(videoGame);

let videoGame = {
  nome: 'PlayStation 5',
  valor: 4000,
  jogos: [
    {nome:'The Last Of us'},
    {nome:'God Of War'}
  ]
};

let jogo3 = {
  nome:'Resident Evil 4'
}
videoGame.jogos.push(jogo3)
console.log(videoGame);

let cliente = {
  nome: 'Murilo',
  ultimoPedido: {
    produto: 'PlayStation 5',
    valor: 4000,
    jogos: [{ nome: 'The Last Of Us Part 2' }, { nome: 'God Of War' }]
  }
};

console.log(cliente.ultimoPedido.jogos[0]);