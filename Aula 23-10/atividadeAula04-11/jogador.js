


class Jogador{
   #nome
   #aposta
   constructor(nome,aposta){
    this.#nome = nome;        // "This" Este nome da classe recebe o nome do atributo
    this.#aposta = aposta;
    Object.freeze(this)

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
apresentarDados(){
   console.log(`Nome do Jogador:${this.getNome},Aposta:${this.getAposta}`); // não esquecer do Template Strings

}





}

            
module.exports = { Jogador }            
// let jogador01 = new Jogador("Edu",3)//
// console.log(jogador01.getAposta)//
 
// jogador01.apresentarDados()  // Não  iniciar com letra maiuscula
                             