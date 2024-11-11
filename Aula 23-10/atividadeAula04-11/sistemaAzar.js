const { Dado } = require('./dado')
const { Jogador } = require('./jogador')




class SistemaAzar {
  #dado
  #jogador
  constructor(dado, jogador) {

    if (dado instanceof Dado && jogador instanceof Jogador) {


      this.#dado = dado;
      this.#jogador = jogador;

    } else {
      console.log(`Os Dados fornecidosn não são do tipo do JOgador ou Dado`)
    }

    Object.freeze(this);
  }


  get getDado() {
    return this.#dado;
  }
  set setDado(dado) {
    this.#dado = dado
  }
  get getJogador() {
    return this.#jogador
  }
  set setJogador(jogador) {
    this.#jogador = jogador
  }
  verificarGanhador() {
    if (this.#dado.getFace === this.#jogador.getAposta) {
      console.log(`Parabéns você ganhou Resultado do sistemaAzar: ${this.#dado.getFace}`);
      this.#jogador.apresentarDados();
    }
  }

}

module.exports = { SistemaAzar }
