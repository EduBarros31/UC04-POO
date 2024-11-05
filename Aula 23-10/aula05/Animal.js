class Animal{
   
    #nome
    #idade
    #corPelo

    constructor(nome, idade, pelo){
        this.#nome = nome;
        this.#idade = idade;
        this.#corPelo = pelo;
    }
emitirSom(){

    console.log(`${this.#nome}emite um som`)
}
get getNome(){
    return this.#nome
}


}