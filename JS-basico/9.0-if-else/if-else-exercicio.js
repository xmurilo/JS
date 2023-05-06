const prompt = require('prompt-sync')()

const marca = prompt('Marca: ')
const modelo = prompt('Modelo: ')
const preco = Number(prompt('Preço: '))

if (marca == 'Fiat') {
  const descontoFiat = preco * 0.1
  const avistaFiat = preco - descontoFiat
  console.log('================')
  console.log(`Marca: ${marca}`)
  console.log(`Modelo:${modelo}`)
  console.log(`Preço R$: ${preco}`)
  console.log(`Desconto: ${descontoFiat}`)
  console.log(`Preço a vista: ${avistaFiat}`)
} else {
    const desconto = preco * 0.2
    const aVista = preco - desconto
    console.log('================')
    console.log(`Marca: ${marca}`)
    console.log(`Modelo:${modelo}`)
    console.log(`Preço R$: ${preco}`)
    console.log(`Desconto: ${desconto}`)
    console.log(`Preço a vista: ${aVista}`)
}
