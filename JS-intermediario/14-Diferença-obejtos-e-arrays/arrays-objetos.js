let celular = {
  nome: 'Samsung S23',
  valor: 3500,
  espaco: '1TB'
};

let celular2 = {
  nome: 'Iphone 14',
  valor: 4500,
  espaco: '1TB'
};
// Não podemos declarar o Array antes dos Objetos
let celulares = [celular, celular2];
console.log(celulares[1].nome);
/*Aqui estou pedindo para entrar no indice 1 do
Array, logo utilizamos o ponto '.' para navegar no objeto
e escolher a informação desejada no CASO foi o nome, e sera
imprimido no console.
*/