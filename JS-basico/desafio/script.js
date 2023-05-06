function somar(numero1, numero2) {
  let soma = numero1 + numero2
  return console.log("a soma de " + numero1 + " e " + numero2 + " é " + soma)
}
somar(1, 10)


function dividir(numero1, numero2){
  let resultDivisao = numero1 / numero2
  return console.log(`${numero1} dividios por ${numero2} é ${resultDivisao} `)
}
dividir(10, 2)


function multiplicacao(numero1, numero2) {
  let resultMultiplicacao = numero1 * numero2
  return console.log(`${numero1} vezes ${numero2} é ${resultMultiplicacao}`)
}
multiplicacao(32, 64)


function subtrair(numero1, numero2) {
  let subtracao = numero1 - numero2
  return console.log(`${numero1} menos ${numero2} é ${subtracao}`)
}

subtrair(64, 32)