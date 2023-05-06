// const calcularAnoDeNascimento = function(idade, mesNascimento, imprimir) {
//   const mesAtual = 4 
//   let anoDeNascimento = 2023 - idade
//   if(mesNascimento > mesAtual) anoDeNascimento--
//   imprimir(anoDeNascimento)
// }

// let imprimirAnoDeNascimento = anoDeNascimento => {
//   console.log("Você nasceu em: " + anoDeNascimento)
// }

// calcularAnoDeNascimento(20, 2, imprimirAnoDeNascimento)

//  =================================================

// function multiplicar(numero, multiplicador) {
//   return numero * multiplicador
// }

// console.log(multiplicar(6,60))

// =================================================

function multiplicar(multiplicador) {
  return function (numero) {
    return numero * multiplicador
  }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)

console.log(dobrar(7))
console.log(triplicar(7))
console.log(quadruplicar(7))
