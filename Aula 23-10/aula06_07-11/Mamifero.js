const{Animal} = require('./Animal')

class Mamifero extends Animal{
       #tipoPelo
       #habitat

constructor(nome, idade, tipoPelo,habitat){
        super(nome,idade)
    
this.#tipoPelo = tipoPelo;
this.#habitat = habitat;
}
get getTipoPelo(){
    return this.#tipoPelo
}
set setTipoPelo(tipoPelo){
    this.#tipoPelo = tipoPelo
}

get getHabitat(){
    return this.#habitat
}
set setHabitat(habitat){
    this.#habitat = habitat




}
emitir(){
    console.log('O Animal emite um som generico')
}

getinfo(){
    console.log(`nome: ${this.getNome}, idade: ${this.getIdade}, tipoPelo: ${this.getTipoPelo}, habitat${this.gethabitat} `)
}      






}

module.exports = { Mamifero }