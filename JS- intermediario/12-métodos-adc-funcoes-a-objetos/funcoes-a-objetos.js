let usuario = {
  nome: 'Murilo',
  excluir: function () {
    console.log(`O usuario ${this.nome} foi excluido`);
  }
};

usuario.excluir();
