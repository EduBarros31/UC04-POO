class Animal {
     #nome
     #idade





constructor(nome,idade){
    this.#nome = nome;
    this.#idade = idade;

}
emitirSom(){
console.log('O animal amite um som generico')
 

}


get getNome(){
    return this.#nome
}

set setNome(nome){
    this.#nome = nome
}

get getIdade(){
    return this.#idade
}
set setIdade(idade){
    this.#idade = idade
}

getInfo(){
    
    console.log(`nome: ${this.getNome}, Idade:  ${this.getIdade}`)
}

}






module.exports = { Animal }