// setTimeout(function () {
//   alert('Ola Mundo !')
// }, 3000) //Segundo parâmetro da função(3000), depois de 3000 == 2 segundos sera executado o alert ! ;

//---------------------------------------
// Arrow Function
// setTimeout(() => {
//   alert('Ola Mundo !')
// }, 2000)

//---------------------------------------

// setInterval(function () {
//   console.log('A cada 2 segundos sera impresso no console');
// }, 2000);

//---------------------------------------
// Arrow Function
// setInterval(() => {
//   console.log('A cada 3 segundos sera impresso no console');
// }, 3000);

// setTimeout(() => {
//   console.log('Console depois do setTimeout');
// }, 2000);

// console.log('console depois do setTimeout');

const idDoIntervalo = setInterval(() => {
  console.log('Executando a cada 2 segundos');
}, 2000);

console.log(idDoIntervalo);
clearInterval(idDoIntervalo);
