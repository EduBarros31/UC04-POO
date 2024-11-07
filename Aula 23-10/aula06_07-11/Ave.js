const{ Animal} = require('./Animal')

class Ave extends Animal{
    #tipodeBico
    #capacidadedeVoo



    constructor(nome, idade, tipodeBico,capacidadedeVoo){
        super(nome,idade)
    
this.#tipodeBico = tipodeBico;
this.#capacidadedeVoo = capacidadedeVoo;
}   
get getTipodeBico(){
    return this.#tipodeBico

}

set setTipodeBico(tipodeBico){
    this.#tipodeBico = tipodeBico
}

get getCpacidadedeVoo(){
    return this.#capacidadedeVoo

}

set setCapacidadedeVoo(capacidadedeVoo){
    this.#capacidadedeVoo = capacidadedeVoo
}
emitirSom(){
    console.log('A ave canta ou pia')
}
 getinfo(){
    console.log(`nome: ${this.getNome}, idade: ${this.getIdade}, tipodeBico: ${this.getTipodeBico}, capacidadedeVoo${this.#capacidadedeVoo} `)
 }



}

module.exports = { Ave }