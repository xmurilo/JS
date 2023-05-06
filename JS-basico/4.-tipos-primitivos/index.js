

// String representam valores de texto, como palavras ou frases. São definidos entre aspas simples ou '' ou duplas "", eu prefiro aspas duplas pois assim podemos usar aspas simples dentro das duplas.
let nome = "Pedro"

// Number representam o próprio nome numeros, valores decimais ou inteiros, Não há separação entre inteiros e floats em JavaScript, ambos são representados pelo tipo Number.
let soma = 32 + 32

// Boolean: Representam valores verdadeiros ou falso. São definidos pelas palabras-chave true e false 
let estaChovendo = false
let temSol = true

//Null: representa um valor nulo ou vazio. É definido pela palavra-chave null
let noValue = null

// Undefined: representa uma variável que foi declarada, mas ainda não foi atribuida a um valor. É definido pela palavra-chave undefined.

let altura;
console.log(altura) // Vai imprimir undefined

//Symbol: São valores únicos e imutáveis, usados como identificadores para propriedades de objetos. São definidos pela função Symbom(). 

const simbolo = Symbol();