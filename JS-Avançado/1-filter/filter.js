let pessoas = [
  { nome: 'Joao', idade: 23 },
  { nome: 'Pedro', idade: 21 },
  { nome: 'Ana', idade: 19 }
];

let pessoasAcimaDe20Anos = [];

for (let i = 0; i < pessoas.length; i++) {
  if (pessoas[i].idade > 20) {
    pessoasAcimaDe20Anos.push(pessoas[i].nome);
  }
}
console.log(`Pessoas acima de 20 anos: ${pessoasAcimaDe20Anos.join(', ')}`);

// --------------------------

let pessoas2 = [
  { nome: 'Adriel', idade: 20 },
  { nome: 'Henrique', idade: 32 },
  { nome: 'Cesar', idade: 31 }
];

let pesoasAcimaDe30 = pessoas2.filter(pessoa => pessoa.idade > 30);

console.log(pesoasAcimaDe30);
