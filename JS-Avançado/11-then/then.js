let ferverAgua = () => {
  return new Promise((resolve, reject) => {
    if (fogaoLigado && chaleiraNoFogao) {
      console.log('1- Agua fervida ');
      resolve();
    } else {
      console.log(
        'É necessario que a chaleira esteja no fogão e o fogão esteja ligado '
      );
      reject();
    }
  });
};

let passarCafe = ferveuAgua => {
  return new Promise(resolve => {
    console.log('2- Passando o Café');
    resolve(true);
  });
};

let tomarCafe = passadoCafe => {
  return new Promise(resolve => {
    console.log('3 - Terminei de tomar o Café');
    resolve(true);
  });
};

let lavarXicara = cafeTomado => {
  return new Promise(resolve => {
    console.log('4 - Terminei de lavar a Xicara');
    resolve(true);
  });
};

let fogaoLigado = true;
let chaleiraNoFogao = true;

ferverAgua(fogaoLigado, chaleiraNoFogao)
  .then(() => {
    return passarCafe();
  })
  .then(() => {
    return tomarCafe();
  })
  .then(() => {
    return lavarXicara();
  })
  .then(() => {
    return console.log("let's work ");
  });
