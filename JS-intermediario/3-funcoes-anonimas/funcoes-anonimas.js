// Exemplo de função anônima
(function() {
  console.log("Esta é uma função anônima.");
})(); // Invocando a função imediatamente com (), após a definição 


// Exemplo de função anônima atribuída a uma variável
const saudacao = function() {
  console.log("Olá, mundo!");
};

// Invocando a função através da variável
saudacao();

// Declarando função anonima com variavel
let resultadoResto = function (numero1, numero2) {
  return numero1 % numero2
}

console.log(resultadoResto(360, 60))


// Exemplo de função anônima como argumento de outra função
setTimeout(function() {
  console.log("Esta função será executada após 1 segundo.");
}, 1000);

/* 
Neste exemplo, a função anônima é passada como argumento para a função setTimeout(),
que irá executá-la após um atraso de 1 segundo (1000 milissegundos).*/