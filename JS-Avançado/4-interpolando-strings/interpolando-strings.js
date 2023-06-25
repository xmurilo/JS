// const imprimirInformacoesPessoais = (primeiroNome, sobrenome, idade) => {
//   return 'Nome: ' + primeiroNome + 'Sobrenome: ' + sobrenome + 'Idade: ' + idade
// };

const imprimirInformacoesPessoais = (primeiroNome, sobrenome, idade) => {
  return `Nome: ${primeiroNome}, Sobrenome: ${sobrenome}, Idade: ${idade}`;
};

console.log(
  `${imprimirInformacoesPessoais('Murilo', 'Silva', 20)} Gosta muito de pizza`
);
