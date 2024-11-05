const {Animal} = require("./Animal");

class Cachorro extends Animal{
    #raça
    constructor(raça){
        super()  // o super e para passar os atributos de animal para  cachorrro
        this.#raça = raça;
    }
emitirSom(){
    console.log(`${this.getNome} Faz au au`)
}



}
module.exports = {cachorro}