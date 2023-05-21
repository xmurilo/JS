// console.log(document);
/* Esse é um método de buscar um elemento pelo Id dele,
// e definimos o parâmetro dentro dos parenteses no caso sera o nome do
// id.
// */
let p = document.getElementById('paragrafo-lorem');
console.log(p);

// Pegando todos os Elementos pela classe "tag-de-input" e colocando eles em uma variável.
let inputPorClasse = document.getElementsByClassName('tag-de-input');
// Imprimindo no console o indice 0 dessa variável no caso seria o primeiro elemento classificado com a classe
console.log(inputPorClasse[0]);

let inputPorTag = document.getElementsByTagName('input');
console.log(inputPorTag);

// Pegando elementos por tag e mais o atributo
let inputPorName = document.querySelectorAll("input [name='email']");
console.log(inputPorName);
