class Animal{
   
    #nome
    

    constructor(nome){
        this.#nome = nome;
    
        
    }
emitirSom(){                                                      // Herança é o reaproveitamento de código
                                                                  // Atributos, Métodos // #Superclasse - Pai// Sub- classes = filhas
                                                                  // exemplo ; Animal = Superclasse & Cachorro,  Gato = Filhas
                                                                  // Extends = Palavra reservada para construir as relações de herança
console.log(`${this.#nome}   emite um som`)
}
get getNome(){
    return this.#nome
}
set setNome(nome){
    this.#nome = nome



}
}
 module.exports = { Animal}