
const {sistemaAzar} = require('./sistemaAzar')

class jogador{
   #nome
   #aposta
   constructor(){
    this.#nome = 
    this.#aposta = Math.floor(Math.random()*6, 0)
   

}



get getNome(){
    return this.#nome;
}
set setNome(nome){
    this.#nome = nome
}
get getAposta(){
    return this.#aposta;
}
set setAposta(aposta){
    this.#aposta = aposta
}


}


module.exports = { jogador }