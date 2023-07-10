const ferverAgua = (chaleiraNoFogao, fogaoLigado) => {
  return new Promise((resolve, reject) => {
    //Testando o tipo dessa variavel é diferente de um booleano
    if (typeof chaleiraNoFogao != 'boolean')
      throw 'Somente o tipo booleano é aceito';
    if ((chaleiraNoFogao, fogaoLigado)) {
      console.log('1- Agua fervida ');
      resolve();
    } else {
      const mensagemErro =
        'É necessario que a chaleira esteja no fogão e o fogão esteja ligado ';
      reject(mensagemErro);
    }
  });
};

let passarCafe = aguaFervida => {
  return new Promise(resolve => {
    console.log('2 - Passando Café');
  });
};

let tomarCafe = passadoCafe => {
  return new Promise(resolve => {
    console.log('3 - Tomando café ');
  });
};

let lavarXicara = tomadoCafe => {
  return new Promise(resolve => {
    console.log('4 - Lavando a Xicara');
  });
};

let chaleiraNoFogao = true;
let fogaoLigado = false;

async function iniciandoPreparoDeCafe() {
  try {
    const aguaFervida = await ferverAgua(chaleiraNoFogao, fogaoLigado);
    const cafePassado = await passarCafe(aguaFervida);
    const tomadoCafe = await tomarCafe(cafePassado);
    const xicaraLavado = await lavarXicara(tomadoCafe);
  } catch (err) {
    console.log(err);
  } finally {
    console.log('Lets back to work');
  }
}

iniciandoPreparoDeCafe();
