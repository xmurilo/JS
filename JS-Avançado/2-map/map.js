// const pessoas = [
//   { nome: 'Pedro', idade: 18 },
//   { nome: 'João', idade: 17 },
//   { nome: 'Gabriela', idade: 18 }
// ];

// let nomePessoas = [];

// for (let i = 0; i < pessoas.length; i++) {
//   nomePessoas.push(pessoas[i].nome);
// }

// console.log(nomePessoas);

const pessoas = [
  { nome: 'Pedro', idade: 18 },
  { nome: 'João', idade: 17 },
  { nome: 'Gabriela', idade: 18 }
];

// Maneira Simplificada
let nomePessoas = pessoas.map(pessoa => pessoa.nome + ' tem ' + pessoa.idade + ' anos ');

// Maneira não tão simplificada
let nomePessoas2 = pessoas.map(function (pessoa) {
  return pessoa.nome;
});

console.log(nomePessoas);

console.log(nomePessoas2);
