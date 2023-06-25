let pessoa = { nome: 'Pedro', sobrenome: 'Muller', idade: 21 };

// Maneira não convencional
// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// let idade = pessoa.idade;

// propriedade: variavel

let { nome: nome, sobrenome: sobrenome, idade: idade } = pessoa;
console.log(nome);
console.log(sobrenome);
console.log(idade);

//  propriedade: variavel
// let {
//   nome: nomeUsuario,
//   sobrenome: sobrenomeUsuario,
//   idade: idadeUsuario
// } = pessoa;

// console.log(nomeUsuario);
// console.log(sobrenomeUsuario);
// console.log(idadeUsuario);

const numeros = [1, 2, 3];

// As variaveis dentro do colchetes ira se basear nos indices do array que esta sendo desestruturado
let [um, dois, tres] = numeros;

console.log(um);
console.log(dois);
console.log(tres);
