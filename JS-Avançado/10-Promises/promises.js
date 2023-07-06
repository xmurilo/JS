// Promisse vai ter 4 estados
// Pendente - Foi criada mas não foi executada
// Realizada - Teve sucesso na execução
// Recusada - Alguma falha na execução da promise
// Estabelecida -  É quando ela foi Realizada ou Recusada

// Promise sempre vem em estado pendente e a gente defini se ela foi realizada ou recusada (resolve || Reject)
// Promise é uma classe no JavaScript e ela vai receber uma função como argumento, geralmente usamos o arrow function
// OBS: Classe a gente sempre escreve com a primeira letra maiuscula

// Anatomia de uma promise
// new Promise((funcao que vai ser executada assincronamente ) => {

// })

// -----
// new Promise((resolve, reject) => {

// })
// Resolve é para mudar o status da promise para Realizada
// Reject é  para mudar o status da promise para Recusada

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {
    if (chaleiraEstaNoFogao && fogaoEstaLigado) {
      console.log('Começando a ferver Agua');
      resolve(); //Poderia passar um parametro dentro dos parenteses,
    } else {
      console.log('Ligue o fogão e coloque a chaleira para aquecer');
      reject();
    }
  });
};

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;
ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado);
console.log('Começando a fazer café');
