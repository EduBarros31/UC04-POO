const {Animal} = require("./Animal");

class Cachorro extends Animal{
    #raca
    constructor(nome,raca){
        super(nome)    // Estou adicionando o método construtor da minha calsse Pai            // o super e para passar os atributos de animal para  cachorrro
        this.#raca = raca;
    }
emitirSom(){
    console.log(`Meu nome é ${this.getNome}, sou da raca${this.#raca} emite som au au`) // ação esécifica de emitir som
}



}
module.exports = {Cachorro}