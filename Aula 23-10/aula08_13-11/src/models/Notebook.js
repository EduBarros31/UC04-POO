class Notebook {

    #numeroDeSerie
    marca
    modelo
    cor
    #preco

    constructor(numeroDeSerie, marca, modelo, cor, preco) {
        this.#numeroDeSerie = numeroDeSerie;
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.#preco = preco;

    }

    get getNumeroDeSerie() {
        return this.#numeroDeSerie

    }
    set setnumeroDeSerie(NovoNumeroDeSerie) {
        this.#numeroDeSerie = NovoNumeroDeSerie
    }
    get getPreco() {
        return this.#preco

    }
    set setNumeroDeSerie(Novopreco) {
        this.#preco = Novopreco
    }





}



module.exports = { Notebook }























