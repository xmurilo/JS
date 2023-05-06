'use strict';

// let usuario = {
//   nome: 'Murilo',
//   saudar: function () {
//     console.log('This no contexto de método ' + this);
//     console.log('This no contexto de método ' + this.nome);
//   }
// };
// usuario.saudar()

let comida = {
  nome: 'Carne',
  temperatura: 0
};

comida.cozinhar = function (temperaturaCozinhar) {
  console.log("This no contexto objeto comida" + this)
  this.temperatura = temperaturaCozinhar;
};

comida.cozinhar(100)
console.log(comida);